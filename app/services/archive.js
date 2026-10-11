import Service, { service } from '@ember/service';
import config from 'esug-2027-app/config/environment';
import { archiveYears } from '../data/archive';
import { buildPresentations } from '../data/presentations';

// Where each archived year's full data is fetched from. Today these are
// static files in public/data/archive/, served from the app's own origin
// (and bundled into the Capacitor apps), so the archive works offline. To
// serve the archive from the internet instead, point this at the remote
// location -- nothing else in the app knows where the data lives.
const BASE_URL = `${config.rootURL}data/archive/`;

// Loads archived conference data on demand, so it stays out of the
// JavaScript bundle. Each year is fetched at most once per app session; a
// failed fetch is forgotten so the next attempt retries it.
//
// The year summaries (app/data/archive/index.js) are bundled and need no
// loading -- use those for anything that only needs year/city/country/
// images.
export default class ArchiveService extends Service {
  @service store;

  #years = new Map(); // year -> Promise of that year's full record
  #presentations = null; // Promise of the flattened presentations index

  get summaries() {
    return archiveYears;
  }

  hasYear(year) {
    return archiveYears.some((summary) => summary.year === year);
  }

  // Resolves to the year's full record, or null when no archive exists for
  // that year (so no request is made for it).
  loadYear(year) {
    if (!this.hasYear(year)) {
      return Promise.resolve(null);
    }

    let promise = this.#years.get(year);

    if (!promise) {
      promise = this.#fetchJSON(`${BASE_URL}${year}.json`);
      promise.catch(() => this.#years.delete(year));
      this.#years.set(year, promise);
    }

    return promise;
  }

  // Resolves to every year's full record, newest first.
  loadAll() {
    return Promise.all(
      archiveYears.map((summary) => this.loadYear(summary.year)),
    );
  }

  // Resolves to the presentations index across every archived year (see
  // app/data/presentations.js), built once.
  presentations() {
    if (!this.#presentations) {
      this.#presentations = this.loadAll().then(buildPresentations);
      this.#presentations.catch(() => (this.#presentations = null));
    }

    return this.#presentations;
  }

  // Resolves to the full record of the year containing the talk, or null.
  // Talk ids are unique across years but don't name their year, so the
  // years already loaded are searched first -- the usual case, arriving
  // from a year's program or the Presentations search -- and every year is
  // loaded only when needed (e.g. opening a talk link directly).
  async findTalkYear(talkId) {
    for (const promise of this.#years.values()) {
      const entry = await promise.catch(() => null);

      if (entry?.talks[talkId]) {
        return entry;
      }
    }

    const entries = await this.loadAll();
    return entries.find((entry) => entry.talks[talkId]) ?? null;
  }

  // Goes through WarpDrive's request manager (app/services/store.js), which
  // ends in its Fetch handler: it rejects on a non-2xx response and parses
  // the JSON body. Calling the request manager directly, rather than
  // store.request(), keeps this plain (non-JSON:API) data out of the
  // store's cache -- this service does its own caching.
  async #fetchJSON(url) {
    const { content } = await this.store.requestManager.request({
      url,
      method: 'GET',
    });

    return content;
  }
}
