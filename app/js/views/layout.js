define([

],
function() {
  var LayoutView = Marionette.LayoutView.extend({
    el : '#product__reviews',
    template: "app/templates/layout.hbs",
    regions: {
      collectionRegion: '#product__reviews--collection'
    },
    triggers: {
      'click .js-create-review': 'review:create'
    }
  });
  return LayoutView;
});