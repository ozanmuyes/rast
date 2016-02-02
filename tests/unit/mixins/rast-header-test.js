import Ember from 'ember';
import RastHeaderMixin from '../../../mixins/rast-header';
import { module, test } from 'qunit';

module('Unit | Mixin | rast header');

// Replace this with your real tests.
test('it works', function(assert) {
  let RastHeaderObject = Ember.Object.extend(RastHeaderMixin);
  let subject = RastHeaderObject.create();
  assert.ok(subject);
});
