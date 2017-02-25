define([
],
function() {
  var meta = {
    path: 'app/img/',
    extension: '.png',
    className: 'js-star',
    names: {
      on: 'star-on',
      off: 'star'
    },
    getSrc: function(name) {
      return this.path + this.names[name] + this.extension;
    }
  };
  Handlebars.registerHelper('renderStars', function(numImages) {
    var images = '';
    for (var i = 0; i < numImages; i++) {
      images += '<img class="' + meta.className + '" src="' + meta.getSrc('off') + '">';
    }
    return images;
  });
  Handlebars.registerHelper('reRenderStars', function(images, starRating) {
    _.each(images, function(image, index) {
      $(image).attr('src', meta.getSrc((starRating <= index) ? 'off' : 'on'));
    });
  });
});