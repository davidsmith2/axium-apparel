define([
  'entities'
],
function(Entities) {

  Handlebars.registerHelper('renderStars', function(starRating) {
    var ret = '';
    _.each(new Array(starRating), function() {
      var model = new Entities.StarModel({name: 'off'});
      ret += '<img class="' + model.get('className') + '" src="' + model.get('src') + '">';
    });
    return ret;
  });

  Handlebars.registerHelper('reRenderStars', function($elements, starRating) {
    _.each($elements, function(element, index) {
      var model = new Entities.StarModel({name: (starRating <= index) ? 'off' : 'on'});
      $(element).attr('src', model.get('src'));
    });
  });

});