define([
],
function() {

  var ReviewModel = Backbone.Model.extend({
    defaults: {}
  });

  var ReviewCollection = Backbone.Collection.extend({
    model: ReviewModel
  });

  return {
    ReviewModel: ReviewModel,
    ReviewCollection: ReviewCollection
  };

});