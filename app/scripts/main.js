require([
  'marionette',
  'app',
  'controller',
  'templates'
],
function(Marionette, App, Controller) {

  JST = window.JST || {};

  Marionette.Renderer.render = function(template, data) {
    if (!JST[template]) throw "Template " + template + " not found!";
    return JST[template](data);
  };

  var app = new App({
    controller: new Controller({
      modalRegion: new Marionette.Region({el: '#modal-region'})
    })
  });

  app.start({});

});
