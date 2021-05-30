require.config({
  baseUrl: 'scripts',
  paths: {
    'backbone': './lib/backbone/backbone',
    'backbone.babysitter': './lib/backbone.babysitter/backbone.babysitter',
    'backbone.wreqr': './lib/backbone.wreqr/backbone.wreqr',
    'bootstrap': './lib/components-bootstrap/bootstrap',
    'handlebars': './lib/handlebars/handlebars.amd',
    'main': './main',
    'jquery': './lib/jquery/jquery',
    'marionette': './lib/marionette/backbone.marionette',
    'templates': './templates',
    'underscore': './lib/lodash/lodash.compat'
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
    templates : {
      deps : ['handlebars']
    },
    main : {
      deps : ['marionette', 'templates']
    }
  }
});

require(['main']);