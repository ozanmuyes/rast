import Ember from 'ember';

var RastPageMixin = Ember.Mixin.create({
  lastClassForWidth: "",

  _resetBodyDeviceClass: function() {
    Ember.$('body').removeClass((index, css) => {
      return (css.match(/device-\w+/g) || []).join(' ');
    });
  },

  onDebouncedDidResize: function() {
    let width = window.innerWidth,
      classForWidth;

    if (width <= 479) {
      classForWidth = "xxs";
    } else if (width > 479 && width <= 767) {
      classForWidth = "xs";
    } else if (width > 767 && width <= 991) {
      classForWidth = "sm";
    } else if (width > 991 && width <= 1199) {
      classForWidth = "md";
    } else {
      classForWidth = "lg";
    }

    if (this.lastClassForWidth !== classForWidth) {
      this._resetBodyDeviceClass();
      Ember.$('body').addClass(`device-${classForWidth}`);
    }

    this.lastClassForWidth = classForWidth;

    Ember.run(() => {
      SEMICOLON.header.topsocial();
      SEMICOLON.initialize.dataResponsiveClasses();
      SEMICOLON.initialize.dataResponsiveHeights();
    });
  },

  _stickyElements: function () {
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
    //RastHeaderMixin.responsiveMenuClass();
    this._stickyElements();

    this.get('resizeService').on("debouncedDidResize", () => {
      this.onDebouncedDidResize();
    });
  }
});

export default RastPageMixin;
