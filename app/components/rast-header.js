import Ember from 'ember';

export default Ember.Component.extend({
  _determineLogo: function () {
    let $body = Ember.$("body"),
      $header = Ember.$("#header"),
      $headerWrap = Ember.$('#header-wrap'),
      $logo = Ember.$('#logo').find('.standard-logo'),
      $retinaLogo = Ember.$('#logo').find('.retina-logo'),
      logoImg = $logo.find('img').attr('src'),
      retinaLogoImg = $retinaLogo.find('img').attr('src'),
      darkLogoImg = $logo.attr('data-dark-logo'),
      retinaDarkLogoImg = $retinaLogo.attr('data-dark-logo'),
      stickyLogoImg = $logo.attr('data-sticky-logo'),
      retinaStickyLogoImg = $retinaLogo.attr('data-sticky-logo'),
      mobileLogoImg = $logo.attr('data-mobile-logo'),
      retinaMobileLogoImg = $retinaLogo.attr('data-mobile-logo');

    if (($header.hasClass('dark') || $body.hasClass('dark')) && !$headerWrap.hasClass('not-dark')) {
      if (darkLogoImg) {
        $logo.find('img').attr('src', darkLogoImg);
      }

      if (retinaDarkLogoImg) {
        $retinaLogo.find('img').attr('src', retinaDarkLogoImg);
      }
    } else {
      if (logoImg) {
        $logo.find('img').attr('src', logoImg);
      }

      if (retinaLogoImg) {
        $retinaLogo.find('img').attr('src', retinaLogoImg);
      }
    }

    if ($header.hasClass('sticky-header')) {
      if (stickyLogoImg) {
        $logo.find('img').attr('src', stickyLogoImg);
      }

      if (retinaStickyLogoImg) {
        $retinaLogo.find('img').attr('src', retinaStickyLogoImg);
      }
    }

    if ($body.hasClass('device-xs') || $body.hasClass('device-xxs')) {
      if (mobileLogoImg) {
        $logo.find('img').attr('src', mobileLogoImg);
      }

      if (retinaMobileLogoImg) {
        $retinaLogo.find('img').attr('src', retinaMobileLogoImg);
      }
    }
  },

  didInsertElement() {
    this._super(...arguments);

    Ember.run(() => {
      SEMICOLON.header.menufunctions();
      this._determineLogo();
    });

    Ember.$('#primary-menu-trigger,#overlay-menu-close').on("click", function () {
      Ember.$('#primary-menu > ul, #primary-menu > div > ul').toggleClass("show");
      return false;
    });

    SEMICOLON.header.responsiveMenuClass();
  }
});
