define([
  'scripts/config',
  'scripts/entities/reviewModel'
],
function(config, ReviewModel) {
  var ReviewCollection = Backbone.Collection.extend({
    model: ReviewModel
  });
  return new ReviewCollection(config.reviewData['_1']);
});