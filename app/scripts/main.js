require([
  'marionette',
	'App',
  'templates'
],
function(Marionette, App) {

  JST = window.JST || {};

  Marionette.Renderer.render = function(template, data) {
    if (!JST[template]) throw "Template " + template + " not found!";
    return JST[template](data);
  };
  
  var app = new App();

  app.addRegions({
    modalRegion: '#modal-region'
  });

  app.start({});

});
