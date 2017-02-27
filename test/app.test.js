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
        var controller = {renderLayout: function() {}};
        var app = new App({controller: controller});
        spyOn(controller, 'renderLayout');
        app.onStart();
        expect(controller.renderLayout).toHaveBeenCalled();
      });

    });

  });

});
