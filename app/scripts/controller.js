define([
  'scripts/config',
  'scripts/entities/reviewCollection',
  'scripts/entities/reviewModel',
  'scripts/router',
  'scripts/views/layoutView',
  'scripts/views/modalView',
  'scripts/views/reviewModalView',
  'scripts/views/reviewsView'
],
function(config, ReviewCollection, ReviewModel, Router, LayoutView, ModalView, ReviewModalView, ReviewsView) {

  console.log('controller');

  var ReviewController = Marionette.Controller.extend({
    views: {
      layout: new LayoutView(),
      reviews: new ReviewsView({
        collection: new ReviewCollection(config.reviewData['_1'])
      })
    },
    router: new Router(),
    initialize: function(options) {
      this.modalRegion = options.modalRegion;
    },
    renderLayout: function() {
      this.listenTo(this.views.layout, 'render', this.onLayoutRender);
      this.listenTo(this.views.layout, config.events.createReview, this.onReviewCreate);
      this.views.layout.render();
    },
    onLayoutRender: function() {
      this.views.layout.collectionRegion.show(this.views.reviews);
    },
    onBeforeShowModal: function() {
      this.reviewModel = new ReviewModel();
      var reviewModalBody = new ReviewModalView.Body({
        model: this.reviewModel
      });
      var reviewModalFooter = new ReviewModalView.Footer({
        model: this.reviewModel
      });
      this.listenTo(reviewModalBody, config.events.editReview, this.onReviewEdit);
      this.listenTo(reviewModalFooter, config.events.submitReview, this.onReviewSubmit);
      this.views.modal.bodyRegion.show(reviewModalBody);
      this.views.modal.footerRegion.show(reviewModalFooter);
    },
    onReviewCreate: function() {
      this.views.modal = new ModalView();
      this.listenTo(this.views.modal, 'before:show', this.onBeforeShowModal);
      this.modalRegion.show(this.views.modal);
    },
    onReviewEdit: function(key, value) {
      this.reviewModel.set(key, value);
    },
    onReviewSubmit: function() {
      this.reviewModel.set(config.reviewData['_2']);
      this.views.reviews.collection.add(this.reviewModel);
      this.views.modal.hide();
    }
  });

  return ReviewController;

});