import Ember from 'ember';

export default Ember.Mixin.create({
  _lastScrollPos: 0,

  bindScrolling: function() {
    let onScroll = () => {
      let scrollPos = document.body.scrollTop || window.pageXOffset,
        delta = this._lastScrollPos - scrollPos;

      // Set _lastScrollPos after "delta" calculation
      this._lastScrollPos = scrollPos;

      //Ember.run.debounce(this, this.scroll, delta < 0 ? "down" : "up", scrollPos, 200);
      Ember.run.throttle(this, this.scroll, delta < 0 ? "down" : "up", scrollPos, 200);
    };

    Ember.$(document).bind('touchmove', onScroll);
    Ember.$(window).bind('scroll', onScroll);
  },

  unbindScrolling: function() {
    Ember.$(window).unbind('scroll');
    Ember.$(document).unbind('touchmove');
  }
});
