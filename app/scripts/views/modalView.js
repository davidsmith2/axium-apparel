define([
  'scripts/config'
],
function(config) {
  var ModalView = Marionette.LayoutView.extend({
    template: config.templates.modal,
    ui: {
      root: '.modal'
    },
    regions: {
      headerRegion: '.modal-header',
      bodyRegion: '.modal-body',
      footerRegion: '.modal-footer'
    },
    onShow: function() {
      this.show();
    },
    show: function() {
      this.ui.root.modal('show');
    },
    hide: function() {
      this.ui.root.modal('hide');
    }
  });
  return ModalView;
});