import Ember from 'ember';
import ScrollMixinMixin from '../../../mixins/scroll-mixin';
import { module, test } from 'qunit';

module('Unit | Mixin | scroll mixin');

// Replace this with your real tests.
test('it works', function(assert) {
  let ScrollMixinObject = Ember.Object.extend(ScrollMixinMixin);
  let subject = ScrollMixinObject.create();
  assert.ok(subject);
});
