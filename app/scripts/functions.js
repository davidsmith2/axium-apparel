define([
  'scripts/entities/reviewCollection',
  'scripts/entities/reviewModel',
  'scripts/router',
  'scripts/views/layoutView',
  'scripts/views/modalView',
  'scripts/views/reviewModalView',
  'scripts/views/reviewsView'
],
function(reviewCollection, ReviewModel, Router, LayoutView, ModalView, ReviewModalView, ReviewsView) {

  console.log('functions');

  var onInputKeyup = function(target) {
    this.model.set(target.name, target.value);
  };

  var onStarClick = function(starNum, stars) {
    _.each(stars, function(star, index) {
      var imgName = (starNum < index) ? 'star' : 'star-on';
      $(star).attr('src', 'app/img/' + imgName + '.png');
    });
    this.model.set('star_rating', ++starNum);
  };

  var renderStars = function(stars) {
    var str = '';
    for (var i = 0; i < stars; i++) {
      str += '<img class="js-star" src="app/img/star.png">';
    }
    return str;
  };

  var onReviewSubmit = function(modalView) {
    this.model.set({
      user: {
        name: 'David Smith',
        avatar: 'reviewer-placeholder.png'
      },
      date: new Date()
    });
    reviewCollection.add(this.model);
    modalView.hide();
  };

  var onBeforeShowModal = function(modalView) {
    var reviewModel = new ReviewModel();
    var reviewModalBodyView = new ReviewModalView.Body({
      model: reviewModel
    });
    var reviewModalFooterView = new ReviewModalView.Footer({
      model: reviewModel
    });
    reviewModalBodyView.on('input:keyup', onInputKeyup);
    reviewModalBodyView.on('star:click', onStarClick);
    reviewModalFooterView.on('review:submit', _.partial(onReviewSubmit, modalView));
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
    onStartApp: onStartApp,
    renderStars: renderStars
  };

});