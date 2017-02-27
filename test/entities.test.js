define([
  'entities'
],
function(Entities) {

  describe('entities', function() {

    describe('star model off', function() {
      it('should set src', function() {
        var starModel = new Entities.StarModel({name: 'off'});
        expect(starModel.get('src')).toEqual('images/star.png');
      });
    });

    describe('star model on', function() {
      it('should set src', function() {
        var starModel = new Entities.StarModel({name: 'on'});
        expect(starModel.get('src')).toEqual('images/star-on.png');
      });
    });

  });

});