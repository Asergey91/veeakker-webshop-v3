import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | webshop/checkout/delivery', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:webshop/checkout/delivery');
    assert.ok(controller);
  });
});
