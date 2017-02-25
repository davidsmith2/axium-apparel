define([
  'js/views/reviewView'
],
function(ReviewView) {
  var ReviewsView = Marionette.CollectionView.extend({
    className: "col-sm-12",
    childView: ReviewView
  });
  return ReviewsView;
});