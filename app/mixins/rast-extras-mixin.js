import Ember from 'ember';

var RastExtrasMixin = Ember.Mixin.create({
  handleMenuTrigger: function() {
    Ember.$('#primary-menu-trigger,#overlay-menu-close').click(function() {
      Ember.$('#primary-menu > ul, #primary-menu > div > ul').toggleClass("show");

      return false;
    });
  }
});

export default RastExtrasMixin;
