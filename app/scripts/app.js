define([
  'controller',
  'router',
  'helpers'
],
function(Controller, Router) {

  console.log('app');

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
