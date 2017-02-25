define([
  'scripts/functions'
],
function(functions) {
  Handlebars.registerHelper('starHelper', functions.renderStars);
});