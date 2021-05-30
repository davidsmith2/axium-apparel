define([
  'helpers'
],
function(helpers) {

  describe('helpers', function() {

    describe('rendering stars', function() {

      it('should output requisite number of images', function() {
        var stars = helpers.renderStars(1);
        expect(stars).toEqual('<img class="js-editReviewStar" src="images/star.png">');
      });

    });

    describe('re-rendering stars', function() {

      var getFilename = function(filepath) {
        return filepath.replace(/^.*[\\\/]/, '');
      };

      it('should update requisite number of images', function() {
        var $elements = $('<img src="images/star.png"><img src="images/star.png">');
        var starRating = 1;
        helpers.reRenderStars($elements, starRating);
        expect(getFilename($elements.get(0).src)).toEqual('star-on.png');
        expect(getFilename($elements.get(1).src)).toEqual('star.png');
      });

    });

  });

});