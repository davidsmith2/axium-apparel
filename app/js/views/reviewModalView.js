define([

],
function() {

  var Body = Marionette.ItemView.extend({
    template: "app/templates/reviewModalBody.hbs",
    events: {
      'keyup .js-input': 'onKeyup'
    },
    onKeyup: function(e) {
      this.model.set(e.target.name, e.target.value);
    }
  });

  var Footer = Marionette.ItemView.extend({
    template: "app/templates/reviewModalFooter.hbs",
    triggers: {
      'click .js-submit-review': 'review:submit'
    }
  });

  return {
    Body: Body,
    Footer: Footer
  };

});