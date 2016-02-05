import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('rast-swipe-slider', 'Integration | Component | rast swipe slider', {
  integration: true
});

test('it renders', function(assert) {
  
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{rast-swipe-slider}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#rast-swipe-slider}}
      template block text
    {{/rast-swipe-slider}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
