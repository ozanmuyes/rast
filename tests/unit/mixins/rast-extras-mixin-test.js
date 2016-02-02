import Ember from 'ember';
import RastExtrasMixinMixin from '../../../mixins/rast-extras-mixin';
import { module, test } from 'qunit';

module('Unit | Mixin | rast extras mixin');

// Replace this with your real tests.
test('it works', function(assert) {
  let RastExtrasMixinObject = Ember.Object.extend(RastExtrasMixinMixin);
  let subject = RastExtrasMixinObject.create();
  assert.ok(subject);
});
