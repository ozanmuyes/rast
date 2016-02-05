import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('rast-portfolio-preview-item', 'Integration | Component | rast portfolio preview item', {
  integration: true
});

test('it renders', function(assert) {
  
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{rast-portfolio-preview-item}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#rast-portfolio-preview-item}}
      template block text
    {{/rast-portfolio-preview-item}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
