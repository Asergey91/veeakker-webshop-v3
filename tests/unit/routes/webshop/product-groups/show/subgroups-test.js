import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | webshop/product-groups/show/subgroups', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:webshop/product-groups/show/subgroups');
    assert.ok(route);
  });
});
