import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    didTransition: function () {
      Ember.Logger.info("route:about-us didTransition()");
    }
  }
});
