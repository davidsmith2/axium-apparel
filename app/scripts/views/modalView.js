define([],
function() {
  var ModalView = Marionette.LayoutView.extend({
    template: "app/templates/modal.hbs",
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