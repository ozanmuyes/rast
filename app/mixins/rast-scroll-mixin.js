import Ember from 'ember';

var RastScrollMixin = Ember.Mixin.create({
  headerWrapOffset: 0,

  scrollInit: function() {
    let $window = Ember.$(window),
      $header = Ember.$("#header"),
      $headerWrap = Ember.$('#header-wrap'),
      $pagemenu = Ember.$('#page-menu'),
      headerOffset = 0,
      pageMenuOffset = 0;

    if ($header.length > 0) {
      headerOffset = $header.offset().top;
    }

    if ($header.length > 0) {
      this.headerWrapOffset = $headerWrap.offset().top;
    }

    if ($pagemenu.length > 0) {
      if ($header.length > 0 && !$header.hasClass('no-sticky')) {
        if ($header.hasClass('sticky-style-2') || $header.hasClass('sticky-style-3')) {
          pageMenuOffset = $pagemenu.offset().top - $headerWrap.outerHeight();
        } else {
          pageMenuOffset = $pagemenu.offset().top - $header.outerHeight();
        }
      } else {
        pageMenuOffset = $pagemenu.offset().top;
      }
    }

    let headerDefinedOffset = $header.attr('data-sticky-offset');
    if (typeof headerDefinedOffset !== 'undefined') {
      if (headerDefinedOffset === 'full') {
        this.headerWrapOffset = $window.height();
        var headerOffsetNegative = $header.attr('data-sticky-offset-negative');
        if (typeof headerOffsetNegative !== 'undefined') {
          this.headerWrapOffset = this.headerWrapOffset - headerOffsetNegative - 1;
        }
      } else {
        this.headerWrapOffset = Number(headerDefinedOffset);
      }
    }
  },

  bindScrolling: function () {
    let onScroll = Ember.debounce(this, () => {
      return this.scrolled();
    }, 100);

    Ember.$(document).bind('touchmove', onScroll);
    Ember.$(window).bind('scroll', onScroll);
  },

  unbindScrolling: function () {
    Ember.$(window).unbind('scroll');
    Ember.$(document).unbind('touchmove');
  }
});

export default RastScrollMixin;
