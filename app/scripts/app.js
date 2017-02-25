define([
  'scripts/controller',
  'scripts/helpers'
],
function(controller) {
  console.log('app');
	var app = new Marionette.Application();
  app.addRegions({
    modalRegion: '#modal-region'
  });
  app.on('before:start', controller.onBeforeStartApp);
	app.on('start', controller.onStartApp);
	return app;
});
