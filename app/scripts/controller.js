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
function(config, reviewCollection, ReviewModel, Router, LayoutView, ModalView, ReviewModalView, ReviewsView) {

  console.log('functions');

  /**
   * @private
   * @param modalView
   */
  var onReviewSubmit = function(modalView) {
    this.model.set(config.reviewData['_2']);
    reviewCollection.add(this.model);
    modalView.hide();
  };

  /**
   * @private
   * @param key
   * @param value
   */
  var onReviewEdit = function(key, value) {
    this.model.set(key, value);
  };

  /**
   * @public
   * @param modalView
   */
  var onBeforeShowModal = function(modalView) {
    var reviewModel = new ReviewModel();
    var reviewModalBodyView = new ReviewModalView.Body({
      model: reviewModel
    });
    var reviewModalFooterView = new ReviewModalView.Footer({
      model: reviewModel
    });
    reviewModalBodyView.on('review:edit', onReviewEdit);
    reviewModalFooterView.on('review:submit', _.partial(onReviewSubmit, modalView));
    this.bodyRegion.show(reviewModalBodyView);
    this.footerRegion.show(reviewModalFooterView);
  };

  /**
   * @public
   * @param modalRegion
   */
  var onCreateReview = function(modalRegion) {
    var modalView = new ModalView();
    modalView.on('before:show', _.partial(onBeforeShowModal, modalView));
    modalRegion.show(modalView);
  };

  /**
   * @public
   */
  var onRenderLayout = function() {
    this.collectionRegion.show(new ReviewsView({
      collection: reviewCollection
    }));
  };

  /**
   * @public
   */
  var onStartApp = function() {
    var layoutView = new LayoutView();
    layoutView.on('render', onRenderLayout);
    layoutView.on('review:create', _.partial(onCreateReview, this.modalRegion));
    layoutView.render();
  };

  /**
   * @public
   */
  var onBeforeStartApp = function() {
    var router = new Router();
    Backbone.history.start({pushState: true});
  };

  return {
    onBeforeStartApp: onBeforeStartApp,
    onStartApp: onStartApp,
    onRenderLayout: onRenderLayout,
    onCreateReview: onCreateReview,
    onBeforeShowModal: onBeforeShowModal
  };

});