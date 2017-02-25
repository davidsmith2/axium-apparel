define([
  'js/entities/review',
	'js/entities/reviews',
  'js/views/layout',
	'js/views/modal',
  'js/views/reviewModal',
  'helpers'
],
function(Review, reviews, LayoutView, ModalView, ReviewModalView) {

	var app = {}, JST = window.JST = window.JST || {};

	app = new Marionette.Application();

	app.addRegions({
    modalRegion: '#modal-region'
	});
	
	Marionette.Renderer.render = function(template, data){
		if (!JST[template]) throw "Template '" + template + "' not found!";
		return JST[template](data);
	};

	var layoutView = new LayoutView();

	layoutView.on('review:create', function() {
    var modalView = new ModalView();
		modalView.on('before:show', function() {
      var reviewModalBodyView = new ReviewModalView.Body();
      var reviewModalFooterView = new ReviewModalView.Footer();
      reviewModalFooterView.on('review:submit', function(e) {
        var review = new Review({
          user: {
            name: 'David Smith',
            avatar: 'reviewer-placeholder.png'
          },
          title: 'title',
          description: 'description',
          star_rating: 1,
          date: new Date()
        });
        reviews.add(review);
			});
      this.bodyRegion.show(reviewModalBodyView);
      this.footerRegion.show(reviewModalFooterView);
		});
		app.modalRegion.show(modalView);
	});

	layoutView.on('render', function() {
		this.collectionRegion.show(new Marionette.CollectionView({
      collection: reviews,
      className: "col-sm-12",
      childView: Marionette.ItemView.extend({
        template: "app/templates/review.hbs",
        className: "row"
      })
    }));
	});
	
	layoutView.render();
	
	return app;

});
