require.config({
	baseUrl: 'app',
    paths: {
		'App': './scripts/app',
		'templates': '../build/templates',
		'jquery': '../bower_components/jquery/dist/jquery',
		'backbone': '../bower_components/backbone/backbone',
		'underscore': '../bower_components/lodash/dist/lodash',
		'marionette': '../bower_components/marionette/lib/core/backbone.marionette',
		'backbone.babysitter': '../bower_components/backbone.babysitter/lib/backbone.babysitter',
		'backbone.wreqr': '../bower_components/backbone.wreqr/lib/backbone.wreqr',
		'bootstrap': '../bower_components/components-bootstrap/js/bootstrap',
		'handlebars': '../bower_components/handlebars/handlebars'
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
