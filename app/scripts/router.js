define([
  'marionette'
],
function(Marionette) {

  var Router = Marionette.AppRouter.extend({
    routes: {
      "*actions": "index"
    },
    index : function() {}
  });
  
  return Router;

});