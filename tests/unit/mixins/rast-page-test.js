import Ember from 'ember';
import RastPageMixin from '../../../mixins/rast-page';
import { module, test } from 'qunit';

module('Unit | Mixin | rast page');

// Replace this with your real tests.
test('it works', function(assert) {
  let RastPageObject = Ember.Object.extend(RastPageMixin);
  let subject = RastPageObject.create();
  assert.ok(subject);
});
