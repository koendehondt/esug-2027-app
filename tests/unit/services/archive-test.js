import { module, test } from 'qunit';
import { setupTest } from 'esug-2027-app/tests/helpers';

module('Unit | Service | archive', function (hooks) {
  setupTest(hooks);

  hooks.beforeEach(function () {
    this.archive = this.owner.lookup('service:archive');
  });

  test('every bundled year summary matches its year data', async function (assert) {
    const entries = await this.archive.loadAll();

    assert.strictEqual(entries.length, this.archive.summaries.length);

    this.archive.summaries.forEach((summary, index) => {
      const entry = entries[index];
      assert.deepEqual(
        {
          year: entry.year,
          city: entry.city,
          country: entry.country,
          heroImage: entry.heroImage,
          logoImage: entry.logoImage,
        },
        summary,
        `ESUG ${summary.year}`,
      );
    });
  });

  test('it loads a year once', async function (assert) {
    const first = this.archive.loadYear(2023);
    const second = this.archive.loadYear(2023);

    assert.strictEqual(first, second);

    const entry = await first;
    assert.strictEqual(entry.year, 2023);
    assert.ok(entry.program.length > 0);
  });

  test('it resolves to null for a year without an archive', async function (assert) {
    assert.strictEqual(await this.archive.loadYear(1999), null);
  });

  test('it finds the year of a talk', async function (assert) {
    const entry = await this.archive.findTalkYear(
      '407-dhon-do-you-know-your-browser',
    );

    assert.strictEqual(entry.year, 2023);
    assert.strictEqual(await this.archive.findTalkYear('no-such-talk'), null);
  });

  test('it builds the presentations index across every year', async function (assert) {
    const presentations = await this.archive.presentations();
    const years = new Set(presentations.map(({ year }) => year));

    assert.strictEqual(years.size, this.archive.summaries.length);
    assert.ok(
      presentations.some(
        ({ talkId }) => talkId === '407-dhon-do-you-know-your-browser',
      ),
    );
  });
});
