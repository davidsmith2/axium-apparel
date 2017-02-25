define([
  'scripts/config'
],
function(config) {

  var Body = Marionette.ItemView.extend({
    template: config.templates.reviewModalBody,
    ui: {
      input: '.js-input',
      star: '.js-star'
    },
    events: {
      'keyup @ui.input': 'onInputKeyup',
      'click @ui.star': 'onStarClick'
    },
    modelEvents: {
      'change:star_rating': 'onStarRatingChange'
    },
    onInputKeyup: function(e) {
      this.trigger('review:edit', e.target.name, e.target.value);
    },
    onStarClick: function(e) {
      this.trigger('review:edit', 'star_rating', $(e.target).index() + 1);
    },
    onStarRatingChange: function() {
      Handlebars.helpers.reRenderStars(this.ui.star, this.model.get('star_rating'));
    }
  });

  var Footer = Marionette.ItemView.extend({
    template: config.templates.reviewModalFooter,
    ui: {
      btn: '.js-submit-review'
    },
    triggers: {
      'click @ui.btn': 'review:submit'
    }
  });

  return {
    Body: Body,
    Footer: Footer
  };

});