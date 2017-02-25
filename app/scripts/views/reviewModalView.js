define([
  'scripts/config'
],
function(config) {

  var Body = Marionette.ItemView.extend({
    template: config.templates.reviewModalBody,
    ui: {
      input: '.js-input',
      star: '.js-star'
    },
    events: {
      'keyup @ui.input': 'onInputKeyup',
      'click @ui.star': 'onStarClick'
    },
    onInputKeyup: function(e) {
      this.trigger('input:keyup', e.target);
    },
    onStarClick: function(e) {
      this.trigger('star:click', $(e.target).index(), this.ui.star);
    }
  });

  var Footer = Marionette.ItemView.extend({
    template: config.templates.reviewModalFooter,
    ui: {
      btn: '.js-submit-review'
    },
    triggers: {
      'click @ui.btn': 'review:submit'
    }
  });

  return {
    Body: Body,
    Footer: Footer
  };

});