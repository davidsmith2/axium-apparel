define([
	'js/entities/reviews',
  'helpers'
],
function(reviews) {

	var app = {}, Layout = {}, JST = window.JST = window.JST || {};

	app = new Backbone.Marionette.Application();
	
	Backbone.Marionette.Renderer.render = function(template, data){
		if (!JST[template]) throw "Template '" + template + "' not found!";
		return JST[template](data);
	};
	
	Layout = Backbone.Marionette.LayoutView.extend({
		el : '#product__reviews',
		template: "app/templates/main-layout.hbs",
		regions: {
			collectionRegion: '#product__reviews--collection'
		}
	});

	layout = new Layout();

	layout.on('render', function() {
		this.collectionRegion.show(new Marionette.CollectionView({
      collection: reviews,
      className: "col-sm-12",
      childView: Marionette.ItemView.extend({
        template: "app/templates/review.hbs",
        className: "row"
      })
    }));
	});
	
	layout.render();
	
	return app;
});
