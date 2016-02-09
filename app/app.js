import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';

let App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

loadInitializers(App, config.modulePrefix);

// Extend link-to component to add "data" attributes
// https://guides.emberjs.com/v2.3.0/templates/binding-element-attributes/#toc_adding-data-attributes
Ember.LinkComponent.reopen({
  init() {
    this._super();

    // bind attributes beginning with 'data-'
    Object.keys(this).forEach((key) => {
      if (key.substr(0, 5) === 'data-') {
        this.get('attributeBindings').pushObject(key);
      }
    });
  }
});

export default App;
