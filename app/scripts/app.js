define([
  'marionette',
  'router',
  'helpers'
],
function(Marionette, Router) {

  var App = Marionette.Application.extend({
    initialize: function(options) {
      this.controller = options.controller;
      this.modalRegion = options.modalRegion;
    },
    onBeforeStart: function() {
      this.router = new Router();
      Backbone.history.start({pushState: true});
    },
    onStart: function() {
      this.controller.renderLayout();
    }
  });

	return App;

});
