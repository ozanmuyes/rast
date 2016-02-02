import Ember from 'ember';
import RastHeaderMixin from './rast-header-mixin';

var RastPageMixin = Ember.Mixin.create(RastHeaderMixin, {
  resetBodyDeviceClass: function() {
    Ember.$('body').removeClass((index, css) => {
      return (css.match(/device-\w+/g) || []).join(' ');
    });
  },
  onDebouncedDidResize: function() {
    let width = window.innerWidth;

    if (width <= 479) {
      this.resetBodyDeviceClass();
      Ember.$('body').addClass("device-xxs");
    } else if (width > 479 && width <= 767) {
      this.resetBodyDeviceClass();
      Ember.$('body').addClass("device-xs");
    } else if (width > 767 && width <= 991) {
      this.resetBodyDeviceClass();
      Ember.$('body').addClass("device-sm");
    } else if (width > 991 && width <= 1199) {
      this.resetBodyDeviceClass();
      Ember.$('body').addClass("device-md");
    } else {
      this.resetBodyDeviceClass();
      Ember.$('body').addClass("device-lg");
    }
  },

  stickyElements: function () {
    let $siStickyEl = Ember.$('.si-sticky'),
      $dotsMenuEl = Ember.$('.dots-menu');

    if ($siStickyEl.length > 0) {
      var siStickyH = $siStickyEl.outerHeight();
      $siStickyEl.css({marginTop: -(siStickyH / 2) + 'px'});
    }

    if ($dotsMenuEl.length > 0) {
      var opmdStickyH = $dotsMenuEl.outerHeight();
      $dotsMenuEl.css({marginTop: -(opmdStickyH / 2) + 'px'});
    }
  },

  init() {
    this.onDebouncedDidResize();
    this.responsiveMenuClass();
    this.stickyElements();

    this.get('resizeService').on("debouncedDidResize", () => {
      this.onDebouncedDidResize();
    });
  }
});

export default RastPageMixin;
