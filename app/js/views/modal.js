define([],
function() {
  var ModalView = Marionette.LayoutView.extend({
    template: "app/templates/modal.hbs",
    regions: {
      headerRegion: '.modal-header',
      bodyRegion: '.modal-body',
      footerRegion: '.modal-footer'
    },
    onShow: function() {
      this.$('.modal').modal('show');
    }
  });
  return ModalView;
});