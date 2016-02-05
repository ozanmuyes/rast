import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['owl-carousel', 'portfolio-carousel'],

  _initCarousel: function () {
    var ocPortfolio = Ember.$('.owl-carousel.portfolio-carousel');

    ocPortfolio.owlCarousel({
      margin: 20,
      nav: true,
      navText: ['<i class="icon-angle-left"></i>', '<i class="icon-angle-right"></i>'],
      autoplay: false,
      autoplayHoverPause: true,
      dots: false,
      responsive: {
        0: {items: 1},
        600: {items: 2},
        1000: {items: 3},
        1200: {items: 4}
      }
    });
  },

  didInsertElement() {
    this._super(...arguments);

    Ember.run.schedule('afterRender', this._initCarousel);
  }
});
