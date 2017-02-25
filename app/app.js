define([
  'functions',
  'helpers',
],
function(functions) {
  console.log('app');
	var app = new Marionette.Application();
  app.addRegions({
    modalRegion: '#modal-region'
  });
  app.on('before:start', functions.onBeforeStartApp);
	app.on('start', functions.onStartApp);
	return app;
});
