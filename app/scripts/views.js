define([
  'marionette',
  'config',
  'bootstrap'
],
function(Marionette, config) {

  var LayoutView = Marionette.LayoutView.extend({
    el : '#product__reviews',
    template: config.templates.layout,
    regions: {
      collectionRegion: '#product__reviews--collection'
    },
    ui: {
      createReview: '.js-create-review'
    },
    triggers: {
      'click @ui.createReview': config.events.createReview
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
      editReviewText: '.js-edit-review-text',
      editReviewStar: '.js-edit-review-star'
    },
    events: {
      'keyup @ui.editReviewText': 'onTextEdit',
      'click @ui.editReviewStar': 'onStarEdit'
    },
    modelEvents: {
      'change:star_rating': 'onStarEdited'
    },
    onTextEdit: function(e) {
      this.trigger(config.events.editReview, e.target.name, e.target.value);
    },
    onStarEdit: function(e) {
      this.trigger(config.events.editReview, 'star_rating', $(e.target).index() + 1);
    },
    onStarEdited: function() {
      Handlebars.helpers.reRenderStars(this.ui.editReviewStar, this.model.get('star_rating'));
    }
  });

  var ReviewModalFooterView = Marionette.ItemView.extend({
    template: config.templates.reviewModalFooter,
    ui: {
      btn: '.js-submit-review'
    },
    triggers: {
      'click @ui.btn': config.events.submitReview
    }
  });

  var ReviewsView = Marionette.CollectionView.extend({
    className: "col-sm-12",
    childView: Marionette.ItemView.extend({
      template: config.templates.review,
      className: 'row'
    })
  });

  var NavView = Marionette.ItemView.extend({
    el: '.nav',
    ui: {
      dropdown: '.dropdown'
    },
    initialize: function () {
      $(this.ui.dropdown).on('show.bs.dropdown', function() {
        $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
      });
      $(this.ui.dropdown).on('hide.bs.dropdown', function() {
        $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
      });
    }
  });

  return {
    Layout: LayoutView,
    Modal: ModalView,
    Nav: NavView,
    ReviewModalBody: ReviewModalBodyView,
    ReviewModalFooter: ReviewModalFooterView,
    Reviews: ReviewsView
  };

});