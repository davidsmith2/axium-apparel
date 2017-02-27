define([
  'marionette',
  'controller',
  'router',
  'helpers'
],
function(Marionette, Controller, Router) {

  var App = Marionette.Application.extend({
    onBeforeStart: function() {
      this.router = new Router();
      Backbone.history.start({pushState: true});
    },
    onStart: function() {
      var controller = new Controller({
        modalRegion: this.modalRegion
      });
      controller.renderLayout();
    }
  });

	return App;

});
