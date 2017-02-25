define([
],
function() {
  Handlebars.registerHelper('starHelper', function(stars) {
    var str = '';
    for (var i = 0; i < stars; i++) {
      str += '<img src="app/img/star.png">'
    }
    return str;
  });
});