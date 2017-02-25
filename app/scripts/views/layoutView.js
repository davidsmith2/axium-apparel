define([
  'scripts/config'
],
function(config) {
  var LayoutView = Marionette.LayoutView.extend({
    el : '#product__reviews',
    template: config.templates.layout,
    regions: {
      collectionRegion: '#product__reviews--collection'
    },
    triggers: {
      'click .js-create-review': 'review:create'
    }
  });
  return LayoutView;
});