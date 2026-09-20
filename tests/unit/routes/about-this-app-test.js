import { module, test } from 'qunit';
import { setupTest } from 'esug-2027-app/tests/helpers';

module('Unit | Route | about-this-app', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:about-this-app');
    assert.ok(route);
  });
});
