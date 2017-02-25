define([

],
function() {
  var Review = Backbone.Model.extend({
    defaults: {
      user: {
        avatar: 'reviewer-placeholder.png'
      }
    }
  });
  return Review;
});