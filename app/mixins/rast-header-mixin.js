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
  },

  stickyMenuClass: function () {
    let $header = Ember.$("#header"),
      $headerWrap = Ember.$('#header-wrap'),
      stickyMenuClasses = $header.attr('data-sticky-class'),
      newClassesArray;

    if (stickyMenuClasses) {
      newClassesArray = stickyMenuClasses.split(/ +/);
    } else {
      newClassesArray = '';
    }

    var noOfNewClasses = newClassesArray.length;

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
  },

  removeStickyness: function () {
    let $body = Ember.$("body"),
      $header = Ember.$("#header"),
      $headerWrap = Ember.$('#header-wrap'),
      oldHeaderClasses = $header.attr('class'),
      oldHeaderWrapClasses = $headerWrap.attr('class'),
      responsiveMenuClasses = $header.attr('data-responsive-class');

    if ($header.hasClass('sticky-header')) {
      Ember.$('body:not(.side-header) #header:not(.no-sticky)').removeClass('sticky-header');
      $header.removeClass().addClass(oldHeaderClasses);
      $headerWrap.removeClass().addClass(oldHeaderWrapClasses);

      if (!$headerWrap.hasClass('force-not-dark')) {
        $headerWrap.removeClass('not-dark');
      }

      // TODO SEMICOLON.slider.swiperSliderMenu();
      // TODO SEMICOLON.slider.revolutionSliderMenu();
    }

    if ($header.hasClass('responsive-sticky-header')) {
      Ember.$('body.sticky-responsive-menu #header').removeClass('responsive-sticky-header');
    }

    if (($body.hasClass('device-xs') || $body.hasClass('device-xxs') || $body.hasClass('device-sm')) && (typeof responsiveMenuClasses === 'undefined')) {
      $header.removeClass().addClass(oldHeaderClasses);
      $headerWrap.removeClass().addClass(oldHeaderWrapClasses);

      if (!$headerWrap.hasClass('force-not-dark')) {
        $headerWrap.removeClass('not-dark');
      }
    }
  },

  stickyMenu: function (headerOffset) {
    let $window = Ember.$(window),
      $body = Ember.$("body"),
      $headerWrap = Ember.$('#header-wrap');

    if ($window.scrollTop() > headerOffset) {
      if ($body.hasClass('device-lg') || $body.hasClass('device-md')) {
        Ember.$('body:not(.side-header) #header:not(.no-sticky)').addClass('sticky-header');

        if (!$headerWrap.hasClass('force-not-dark')) {
          $headerWrap.removeClass('not-dark');
        }

        this.stickyMenuClass();
      } else if ($body.hasClass('device-xs') || $body.hasClass('device-xxs') || $body.hasClass('device-sm')) {
        if ($body.hasClass('sticky-responsive-menu')) {
          Ember.$('#header:not(.no-sticky)').addClass('responsive-sticky-header');
          this.stickyMenuClass();
        }
      }
    } else {
      this.removeStickyness();
    }
  }
});

export default RastHeaderMixin;
