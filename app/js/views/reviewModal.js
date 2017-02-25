define([

],
function() {

  var Body = Marionette.ItemView.extend({
    template: "app/templates/reviewModalBody.hbs"
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