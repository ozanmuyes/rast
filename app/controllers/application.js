import Ember from 'ember';
import RastPageMixin from '../mixins/rast-page-mixin';
import ScrollMixin from '../mixins/scroll-mixin';

export default Ember.Controller.extend(RastPageMixin, ScrollMixin, {
  init() {
    // TODO Uncomment the line below to support sticky header
    //this.bindScrolling();

    Ember.run(SEMICOLON.documentOnReady.init);
  },
  scroll(direction, pos) {
    if (direction === "down" && pos >= 144) {
      Ember.$("header").addClass("sticky-header");
    } else if (direction === "up" && pos < 144) {
      Ember.$("header").removeClass("sticky-header");
    }
  }
});
