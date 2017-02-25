define([
  'js/entities/reviewCollection',
  'js/entities/reviewModel',
  'js/views/layoutView',
  'js/views/modalView',
  'js/views/reviewModalView',
  'js/views/reviewsView',
  'router'
],
function(reviewCollection, ReviewModel, LayoutView, ModalView, ReviewModalView, ReviewsView, Router) {

  console.log('functions');

  var onReviewSubmit = function(reviewModalBodyView, modalView) {
    var staticData = {
      user: {
        name: 'David Smith',
        avatar: 'reviewer-placeholder.png'
      },
      date: new Date()
    };
    var dynamicData = reviewModalBodyView.model.attributes;
    var reviewModel = new ReviewModel(_.extend({}, staticData, dynamicData));
    reviewCollection.add(reviewModel);
    modalView.hide();
  };

  var onBeforeShowModal = function(modalView) {
    var reviewModalBodyView = new ReviewModalView.Body({
      model: new ReviewModel()
    });
    var reviewModalFooterView = new ReviewModalView.Footer();
    reviewModalFooterView.on('review:submit', _.partial(onReviewSubmit, reviewModalBodyView, modalView));
    this.bodyRegion.show(reviewModalBodyView);
    this.footerRegion.show(reviewModalFooterView);
  };

  var onCreateReview = function(modalRegion) {
    var modalView = new ModalView();
    modalView.on('before:show', _.partial(onBeforeShowModal, modalView));
    modalRegion.show(modalView);
  };

  var onRenderLayout = function() {
    this.collectionRegion.show(new ReviewsView({
      collection: reviewCollection
    }));
  };

  var onBeforeStartApp = function(options) {
    var router = new Router();
    Backbone.history.start({pushState: true});
  };

  var onStartApp = function(options) {
    var layoutView = new LayoutView();
    layoutView.on('review:create', _.partial(onCreateReview, this.modalRegion));
    layoutView.on('render', onRenderLayout);
    layoutView.render();
  };

  return {
    onReviewSubmit: onReviewSubmit,
    onBeforeShowModal: onBeforeShowModal,
    onCreateReview: onCreateReview,
    onRenderLayout: onRenderLayout,
    onBeforeStartApp: onBeforeStartApp,
    onStartApp: onStartApp
  };

});