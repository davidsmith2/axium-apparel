define([
],
function() {

  console.log('router');

  var Router = Marionette.AppRouter.extend({
    routes: {
      "*actions": "index"
    },
    index : function() {}
  });
  
  return Router;

});