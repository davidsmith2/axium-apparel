define([
  'app'
],
function(App) {

  describe('App', function() {

    describe('onBeforeStart', function() {

      it('should start listening for hash changes', function() {
        var app = new App();
        spyOn(Backbone.history, 'start');
        app.onBeforeStart();
        expect(Backbone.history.start).toHaveBeenCalled();
      });

    });

    describe('onStart', function() {

      it('should render the layout', function() {
        var controller = {show: function() {}};
        var app = new App({controller: controller});
        spyOn(controller, 'show');
        app.onStart();
        expect(controller.show).toHaveBeenCalled();
      });

    });

  });

});
