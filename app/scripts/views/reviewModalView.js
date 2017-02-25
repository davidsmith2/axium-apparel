define([

],
function() {

  var Body = Marionette.ItemView.extend({
    template: "app/templates/reviewModalBody.hbs",
    ui: {
      input: '.js-input',
      star: 'img'
    },
    events: {
      'keyup @ui.input': 'onInputKeyup',
      'click @ui.star': 'onStarClick'
    },
    onInputKeyup: function(e) {
      this.model.set(e.target.name, e.target.value);
    },
    onStarClick: function(e) {
      var starNum = $(e.target).index();
      _.each(this.ui.star, function(star, index) {
        var imgName = (starNum < index) ? 'star' : 'star-on';
        $(star).attr('src', 'app/img/' + imgName + '.png');
      });
      this.model.set('star_rating', ++starNum);
    }
  });

  var Footer = Marionette.ItemView.extend({
    template: "app/templates/reviewModalFooter.hbs",
    triggers: {
      'click .js-submit-review': 'review:submit'
    }
  });

  return {
    Body: Body,
    Footer: Footer
  };

});