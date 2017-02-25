define([
  'scripts/entities'
],
function(Entities) {

  Handlebars.registerHelper('renderStars', function(starRating) {
    var ret = '';
    for (var i = 0; i < starRating; i++) {
      var model = new Entities.StarModel({name: 'off'});
      ret += '<img class="' + model.get('className') + '" src="' + model.get('src') + '">';
    }
    return ret;
  });

  Handlebars.registerHelper('reRenderStars', function($elements, starRating) {
    $elements.each(function(index) {
      var model = new Entities.StarModel({name: (starRating <= index) ? 'off' : 'on'});
      $(this).attr('src', model.get('src'));
    });
  });

});