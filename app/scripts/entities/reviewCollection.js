define([
  'scripts/entities/reviewModel'
],
function(ReviewModel) {
  var ReviewCollection = Backbone.Collection.extend({
    model: ReviewModel
  });
  return ReviewCollection;
});