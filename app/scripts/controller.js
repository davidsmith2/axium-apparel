define([
  'scripts/config',
  'scripts/entities',
  'scripts/views'
],
function(config, Entities, Views) {

  console.log('controller');

  var ReviewController = Marionette.Controller.extend({
    views: {
      layout: new Views.Layout(),
      reviews: new Views.Reviews({
        collection: new Entities.ReviewCollection(config.reviewData['_1'])
      })
    },
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
      this.reviewModel = new Entities.ReviewModel();
      var reviewModalBody = new Views.ReviewModalBody({
        model: this.reviewModel
      });
      var reviewModalFooter = new Views.ReviewModalFooter({
        model: this.reviewModel
      });
      this.listenTo(reviewModalBody, config.events.editReview, this.onReviewEdit);
      this.listenTo(reviewModalFooter, config.events.submitReview, this.onReviewSubmit);
      this.views.modal.bodyRegion.show(reviewModalBody);
      this.views.modal.footerRegion.show(reviewModalFooter);
    },
    onReviewCreate: function() {
      this.views.modal = new Views.Modal();
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