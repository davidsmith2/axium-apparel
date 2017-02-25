define([
  'js/entities/reviewCollection',
  'js/entities/reviewModel',
  'js/views/layoutView',
	'js/views/modalView',
  'js/views/reviewModalView',
  'js/views/reviewsView',
  'helpers'
],
function(reviewCollection, ReviewModel, LayoutView, ModalView, ReviewModalView, ReviewsView) {

  Marionette.Renderer.render = function(template, data){
    if (!JST[template]) throw "Template '" + template + "' not found!";
    return JST[template](data);
  };

  var app = {}, JST = window.JST = window.JST || {};

	app = new Marionette.Application();

	app.addRegions({
    modalRegion: '#modal-region'
	});
	
	var layoutView = new LayoutView();

	layoutView.on('review:create', function() {
    var modalView = new ModalView();
		modalView.on('before:show', function() {
      var reviewModalBodyView = new ReviewModalView.Body({
        model: new ReviewModel()
      });
      var reviewModalFooterView = new ReviewModalView.Footer();
      reviewModalFooterView.on('review:submit', function(e) {
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
			});
      this.bodyRegion.show(reviewModalBodyView);
      this.footerRegion.show(reviewModalFooterView);
		});
		app.modalRegion.show(modalView);
	});

	layoutView.on('render', function() {
		this.collectionRegion.show(new ReviewsView({
		  collection: reviewCollection
    }));
	});
	
	layoutView.render();
	
	return app;

});
