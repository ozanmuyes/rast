import Ember from 'ember';
import RastHeaderMixin from '../mixins/rast-header-mixin';

export default Ember.Component.extend(RastHeaderMixin, {
  didInsertElement() {
    this.logo();
  }
});
