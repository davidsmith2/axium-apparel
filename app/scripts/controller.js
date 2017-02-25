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

  /**
   * @private
   * @param starNum
   * @param stars
   */
  var onStarClick = function(starNum, stars) {
    _.each(stars, function(star, index) {
      var imgName = (starNum < index) ? 'star' : 'star-on';
      $(star).attr('src', 'app/img/' + imgName + '.png');
    });
    this.model.set('star_rating', ++starNum);
  };

  /**
   * @private
   * @param target
   */
  var onInputKeyup = function(target) {
    this.model.set(target.name, target.value);
  };

  /**
   * @private
   * @param modalView
   */
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

  /**
   * @public
   * @param stars
   * @returns {string}
   */
  var renderStars = function(stars) {
    var str = '';
    for (var i = 0; i < stars; i++) {
      str += '<img class="js-star" src="app/img/star.png">';
    }
    return str;
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
    reviewModalBodyView.on('input:keyup', onInputKeyup);
    reviewModalBodyView.on('star:click', onStarClick);
    reviewModalFooterView.on('review:submit', _.partial(onReviewSubmit, modalView));
    this.bodyRegion.show(reviewModalBodyView);
    this.footerRegion.show(reviewModalFooterView);
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
  var onStartApp = function() {
    var layoutView = new LayoutView();
    layoutView.on('review:create', _.partial(onCreateReview, this.modalRegion));
    layoutView.on('render', onRenderLayout);
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
    onCreateReview: onCreateReview,
    onRenderLayout: onRenderLayout,
    onBeforeShowModal: onBeforeShowModal,
    renderStars: renderStars
  };

});