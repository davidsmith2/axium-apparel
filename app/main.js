require.config({
	baseUrl: 'app',
    paths: {
    'backbone': './scripts/lib/backbone/backbone',
    'backbone.babysitter': './scripts/lib/backbone.babysitter/backbone.babysitter',
    'backbone.wreqr': './scripts/lib/backbone.wreqr/backbone.wreqr',
    'bootstrap': './scripts/lib/components-bootstrap/bootstrap',
    'handlebars': './scripts/lib/handlebars/handlebars',
    'jquery': './scripts/lib/jquery/jquery',
    'marionette': './scripts/lib/marionette/backbone.marionette',
    'underscore': './scripts/lib/lodash/lodash.compat',
		'App': './scripts/app',
    'templates': '../app/templates.prod'
	},
	shim : {
		jquery : {
			exports : 'jQuery'
		},
		underscore : {
			exports : '_'
		},
		backbone : {
			deps : ['jquery', 'underscore'],
			exports : 'Backbone'
		},
		marionette : {
			deps : ['jquery', 'underscore', 'backbone'],
			exports : 'Marionette'
		},
		bootstrap : {
			deps : ['jquery'],
		},
		App : {
			deps : ['jquery', 'underscore', 'backbone', 'marionette'],
		},
		templates : {
			deps : ['handlebars']}
		}
});

require([
	'jquery',
	'backbone',
	'underscore',
	'marionette',
	'App',
	'templates',
	'handlebars',
	'bootstrap'
],
function(jquery, backbone, underscore, marionette, App) {

	console.log('main');

  JST = window.JST || {};

  marionette.Renderer.render = function(template, data) {
    if (!JST[template]) throw "Template " + template + " not found!";
    return JST[template](data);
  };
  
  var app = new App();

  app.addRegions({
    modalRegion: '#modal-region'
  });

  app.start({});

});
