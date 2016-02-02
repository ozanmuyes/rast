import Ember from 'ember';
import RastPageMixin from '../mixins/rast-page-mixin';

export default Ember.Controller.extend(RastPageMixin, {
});

// Extend link-to component to add "data" attributes
// https://guides.emberjs.com/v2.3.0/templates/binding-element-attributes/#toc_adding-data-attributes
Ember.LinkComponent.reopen({
  init() {
    this._super();
    var self = this;

    // bind attributes beginning with 'data-'
    Object.keys(this).forEach(function (key) {
      if (key.substr(0, 5) === 'data-') {
        self.get('attributeBindings').pushObject(key);
      }
    });
  }
});

