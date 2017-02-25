define([
  'scripts/config'
],
function(config) {

  var LayoutView = Marionette.LayoutView.extend({
    el : '#product__reviews',
    template: config.templates.layout,
    regions: {
      collectionRegion: '#product__reviews--collection'
    },
    triggers: {
      'click .js-create-review': 'review:create'
    }
  });

  var ModalView = Marionette.LayoutView.extend({
    template: config.templates.modal,
    ui: {
      root: '.modal'
    },
    regions: {
      headerRegion: '.modal-header',
      bodyRegion: '.modal-body',
      footerRegion: '.modal-footer'
    },
    onShow: function() {
      this.show();
    },
    show: function() {
      this.ui.root.modal('show');
    },
    hide: function() {
      this.ui.root.modal('hide');
    }
  });

  var ReviewModalBodyView = Marionette.ItemView.extend({
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

  var ReviewModalFooterView = Marionette.ItemView.extend({
    template: config.templates.reviewModalFooter,
    ui: {
      btn: '.js-submit-review'
    },
    triggers: {
      'click @ui.btn': 'review:submit'
    }
  });

  var ReviewView = Marionette.ItemView.extend({
    template: config.templates.review,
    className: 'row'
  });

  var ReviewsView = Marionette.CollectionView.extend({
    className: "col-sm-12",
    childView: ReviewView
  });

  return {
    Layout: LayoutView,
    Modal: ModalView,
    Review: ReviewView,
    ReviewModalBody: ReviewModalBodyView,
    ReviewModalFooter: ReviewModalFooterView,
    Reviews: ReviewsView
  };

});