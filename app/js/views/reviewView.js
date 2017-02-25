define([

],
function() {
  var ReviewView = Marionette.ItemView.extend({
    template: "app/templates/review.hbs",
    className: "row"
  });
  return ReviewView;
});