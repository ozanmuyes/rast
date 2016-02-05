import Ember from 'ember';

var RastHeaderMixin = Ember.Mixin.create({
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
