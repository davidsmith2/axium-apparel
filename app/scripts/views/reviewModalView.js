define([
],
function() {

  var Body = Marionette.ItemView.extend({
    template: "app/templates/reviewModalBody.hbs",
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
    template: "app/templates/reviewModalFooter.hbs",
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