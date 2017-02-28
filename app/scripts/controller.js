define([
  'config',
  'entities',
  'views'
],
function(config, Entities, Views) {

  var Controller = Marionette.Controller.extend({
    views: {
      nav: new Views.Nav(),
      layout: new Views.Layout(),
      reviews: new Views.Reviews({
        collection: new Entities.ReviewCollection(config.reviewData._1)
      })
    },
    initialize: function(options) {
      this.modalRegion = options.modalRegion;
    },
    /**
     * @public
     */
    show: function() {
      this.listenTo(this.views.layout, 'render', function() {
        this.views.layout.collectionRegion.show(this.views.reviews);
      }.bind(this));
      this.listenTo(this.views.layout, config.events.createReview, this.onCreateReview);
      this.views.layout.render();
    },
    onCreateReview: function() {
      this.views.modal = new Views.Modal();
      this.listenTo(this.views.modal, 'before:show', function() {
        this.reviewModel = new Entities.ReviewModel();
        var reviewModalBody = new Views.ReviewModalBody({
          model: this.reviewModel
        });
        var reviewModalFooter = new Views.ReviewModalFooter({
          model: this.reviewModel
        });
        this.listenTo(reviewModalBody, config.events.editReview, this.onEditReview);
        this.listenTo(reviewModalFooter, config.events.submitReview, this.onSubmitReview);
        this.views.modal.bodyRegion.show(reviewModalBody);
        this.views.modal.footerRegion.show(reviewModalFooter);
      }.bind(this));
      this.modalRegion.show(this.views.modal);
    },
    onEditReview: function(key, value) {
      this.reviewModel.set(key, value);
    },
    onSubmitReview: function() {
      this.reviewModel.set(config.reviewData._2);
      this.views.reviews.collection.add(this.reviewModel);
      this.views.modal.hide();
    }
  });

  return Controller;

});