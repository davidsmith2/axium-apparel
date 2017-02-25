define([
  'scripts/controller',
  'scripts/helpers'
],
function(Controller) {
  console.log('app');
  var onBeforeStartApp = function() {
    Backbone.history.start({pushState: true});
  };
  var onStartApp = function() {
    var controller = new Controller({
      modalRegion: this.modalRegion
    });
    controller.renderLayout();
  };
  var app = new Marionette.Application();
  app.addRegions({
    modalRegion: '#modal-region'
  });
  app.on('before:start', onBeforeStartApp);
	app.on('start', onStartApp);
	return app;
});
