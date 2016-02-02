import Ember from 'ember';

var RastHeaderMixin = Ember.Mixin.create({
  logo: function() {
    let $body = Ember.$("body"),
      $header = Ember.$("#header"),
      $headerWrap = Ember.$('#header-wrap'),
      defaultLogo = Ember.$('#logo').find('.standard-logo'),
      retinaLogo = Ember.$('#logo').find('.retina-logo'),
      defaultLogoImg = defaultLogo.find('img').attr('src'),
      retinaLogoImg = retinaLogo.find('img').attr('src'),
      defaultDarkLogo = defaultLogo.attr('data-dark-logo'),
      retinaDarkLogo = retinaLogo.attr('data-dark-logo'),
      defaultStickyLogo = defaultLogo.attr('data-sticky-logo'),
      retinaStickyLogo = retinaLogo.attr('data-sticky-logo'),
      defaultMobileLogo = defaultLogo.attr('data-mobile-logo'),
      retinaMobileLogo = retinaLogo.attr('data-mobile-logo');

    if (($header.hasClass('dark') || $body.hasClass('dark')) && !$headerWrap.hasClass('not-dark')) {
      if (defaultDarkLogo) {
        defaultLogo.find('img').attr('src', defaultDarkLogo);
      }

      if (retinaDarkLogo) {
        retinaLogo.find('img').attr('src', retinaDarkLogo);
      }
    } else {
      if (defaultLogoImg) {
        defaultLogo.find('img').attr('src', defaultLogoImg);
      }

      if (retinaLogoImg) {
        retinaLogo.find('img').attr('src', retinaLogoImg);
      }
    }

    if ($header.hasClass('sticky-header')) {
      if (defaultStickyLogo) {
        defaultLogo.find('img').attr('src', defaultStickyLogo);
      }

      if (retinaStickyLogo) {
        retinaLogo.find('img').attr('src', retinaStickyLogo);
      }
    }

    if ($body.hasClass('device-xs') || $body.hasClass('device-xxs')) {
      if (defaultMobileLogo) {
        defaultLogo.find('img').attr('src', defaultMobileLogo);
      }

      if (retinaMobileLogo) {
        retinaLogo.find('img').attr('src', retinaMobileLogo);
      }
    }
  },

  responsiveMenuClass: function() {
    let $body = Ember.$("body"),
      $header = Ember.$("#header"),
      $headerWrap = Ember.$('#header-wrap'),
      responsiveMenuClasses = $header.attr('data-responsive-class'),
      newClassesArray;

    if ($body.hasClass('device-xs') || $body.hasClass('device-xxs') || $body.hasClass('device-sm')) {
      if (responsiveMenuClasses) {
        newClassesArray = responsiveMenuClasses.split(/ +/);
      } else {
        newClassesArray = '';
      }

      let noOfNewClasses = newClassesArray.length;

      if (noOfNewClasses > 0) {
        for (var i = 0; i < noOfNewClasses; i++) {
          if (newClassesArray[i] === 'not-dark') {
            $header.removeClass('dark');
            $headerWrap.addClass('not-dark');
          } else if (newClassesArray[i] === 'dark') {
            $headerWrap.removeClass('not-dark force-not-dark');

            if (!$header.hasClass(newClassesArray[i])) {
              $header.addClass(newClassesArray[i]);
            }
          } else if (!$header.hasClass(newClassesArray[i])) {
            $header.addClass(newClassesArray[i]);
          }
        }
      }

      this.logo();
    }
  }
});

export default RastHeaderMixin;
