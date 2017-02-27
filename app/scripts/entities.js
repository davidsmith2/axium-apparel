define([
  'backbone'
],
function(Backbone) {

  var ReviewModel = Backbone.Model.extend({
    defaults: {}
  });

  var ReviewCollection = Backbone.Collection.extend({
    model: ReviewModel
  });

  var StarModel = Backbone.Model.extend({
    names: {
      on: 'star-on',
      off: 'star'
    },
    defaults: {
      path: 'images/',
      extension: '.png',
      className: 'js-edit-review-star'
    },
    initialize: function(options) {
      this.set('src', this.getSrc(options.name));
    },
    getSrc: function(name) {
      return this.get('path') + this.names[name] + this.get('extension');
    }
  });

  return {
    ReviewCollection: ReviewCollection,
    ReviewModel: ReviewModel,
    StarModel: StarModel
  };

});