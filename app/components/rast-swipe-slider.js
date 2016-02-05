import Ember from 'ember';

export default Ember.Component.extend({
  _initSlider: function() {
    var mySwiper = new Swiper("#" + this.$().attr("id") + ">.swiper-container", {
      speed: 500,
      loop: true,
      autoplay: 4000,
      grabCursor: true,
      autoplayDisableOnInteraction: true
    });
  },

  didInsertElement() {
    this._super(...arguments);

    Ember.run.schedule('afterRender', this, this._initSlider);
  }
});
