import Ember from 'ember';
import RastScrollMixinMixin from '../../../mixins/rast-scroll-mixin';
import { module, test } from 'qunit';

module('Unit | Mixin | rast scroll mixin');

// Replace this with your real tests.
test('it works', function(assert) {
  let RastScrollMixinObject = Ember.Object.extend(RastScrollMixinMixin);
  let subject = RastScrollMixinObject.create();
  assert.ok(subject);
});
