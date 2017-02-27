define([
  'entities',
  'handlebars'
],
function(Entities) {

  var renderStars = function(starRating) {
    var ret = '';
    _.each(new Array(starRating), function() {
      var model = new Entities.StarModel({name: 'off'});
      ret += '<img class="' + model.get('className') + '" src="' + model.get('src') + '">';
    });
    return ret;
  };

  var reRenderStars = function($elements, starRating) {
    _.each($elements, function(element, index) {
      var model = new Entities.StarModel({name: (starRating <= index) ? 'off' : 'on'});
      $(element).attr('src', model.get('src'));
    });
  };

  Handlebars.registerHelper('renderStars', renderStars);
  Handlebars.registerHelper('reRenderStars', reRenderStars);

  return {
    renderStars: renderStars,
    reRenderStars: reRenderStars
  };

});