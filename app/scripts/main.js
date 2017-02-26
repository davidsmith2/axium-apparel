require.config({
	baseUrl: 'scripts',
    paths: {
    'backbone': './lib/backbone/backbone',
    'backbone.babysitter': './lib/backbone.babysitter/backbone.babysitter',
    'backbone.wreqr': './lib/backbone.wreqr/backbone.wreqr',
    'bootstrap': './lib/components-bootstrap/bootstrap',
    'handlebars': './lib/handlebars/handlebars',
    'jquery': './lib/jquery/jquery',
    'marionette': './lib/marionette/backbone.marionette',
    'underscore': './lib/lodash/lodash.compat',
		'App': './app',
    'templates': '../../.tmp/scripts/templates.prod'
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
