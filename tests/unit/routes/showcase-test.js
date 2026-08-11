import { module, test } from 'qunit';
import { setupTest } from 'esug-2027-app/tests/helpers';

module('Unit | Route | showcase', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:showcase');
    assert.ok(route);
  });
});
