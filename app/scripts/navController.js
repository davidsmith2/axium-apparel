define([
  'views'
],
function(Views) {

  var NavController = Marionette.Controller.extend({
    initialize: function (options) {
      this.view = new Views.Nav(options);
    },
    renderLayout: function() {}
  });

  return NavController;

});