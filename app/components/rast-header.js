import Ember from 'ember';
import RastExtrasMixin from '../mixins/rast-extras-mixin';
import RastHeaderMixin from '../mixins/rast-header-mixin';

export default Ember.Component.extend(RastExtrasMixin, RastHeaderMixin, {
  didInsertElement() {
    this.logo();
    this.handleMenuTrigger();
  }
});
