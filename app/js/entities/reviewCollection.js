define([
  'js/entities/reviewModel'
],
function(ReviewModel) {
  var ReviewCollection = Backbone.Collection.extend({
    model: ReviewModel
  });
  return new ReviewCollection([
    {
      "user": {
        "name": "Shaun White",
        "avatar": "reviewer1.png"
      },
      "title": "This thing is a monster!",
      "description": "tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk.",
      "date": "2013-08-20",
      "star_rating": 4
    },
    {
      "user": {
        "name": "Jennie Loren",
        "avatar": "reviewer2.png"
      },
      "title": "Luv it so much I bought 2!",
      "description": "tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk tktktk.",
      "date": "2013-01-12",
      "star_rating": 3
    }
  ]);
});