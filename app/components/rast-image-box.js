import Ember from 'ember';

/**
 * Remarks;
 *  - Minimum image width MUST be 720 pixels
 *  - Image ratio MUST be 4:3
 *  - Therefore minimum image height MUST be 540 pixels
 */

export default Ember.Component.extend({
  classNames: ["rast-image-box"]
});
