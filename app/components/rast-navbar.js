import Ember from 'ember';
import RastScrollMixin from '../mixins/rast-scroll-mixin';

export default Ember.Component.extend(RastScrollMixin, {
  menuInvert() {
    let $window = Ember.$(window);

    Ember.$('#primary-menu .mega-menu-content, #primary-menu ul ul').each(function (index, element) {
      var $menuChildElement = Ember.$(element);
      var windowWidth = $window.width();
      var menuChildOffset = $menuChildElement.offset();
      var menuChildWidth = $menuChildElement.width();
      var menuChildLeft = menuChildOffset.left;

      if (windowWidth - (menuChildWidth + menuChildLeft) < 0) {
        $menuChildElement.addClass('menu-pos-invert');
      }
    });
  },
  didInsertElement() {
    let $body = Ember.$('body');

    if ($body.hasClass('device-lg') || $body.hasClass('device-md')) {
      Ember.$('#primary-menu ul ul, #primary-menu ul .mega-menu-content').css('display', 'block');
      this.menuInvert();
    }

    Ember.$('body:not(.side-header) #primary-menu > ul, body:not(.side-header) #primary-menu > div > ul, .top-links > ul').superfish({
      popUpSelector: 'ul,.mega-menu-content,.top-link-section',
      delay: 250,
      speed: 350,
      animation: {opacity: 'show'},
      animationOut: {opacity: 'hide'},
      cssArrows: false
    });

    Ember.$('body.side-header #primary-menu > ul').superfish({
      popUpSelector: 'ul',
      delay: 250,
      speed: 350,
      animation: {opacity: 'show', height: 'show'},
      animationOut: {opacity: 'hide', height: 'hide'},
      cssArrows: false
    });

    this.scrollInit();
  }
});
