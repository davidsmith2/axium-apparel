define([
  'scripts/controller'
],
function(controller) {
  Handlebars.registerHelper('starHelper', controller.renderStars);
});