define([
  'scripts/config'
],
function(config) {
  var ReviewView = Marionette.ItemView.extend({
    template: config.templates.review,
    className: 'row'
  });
  return ReviewView;
});