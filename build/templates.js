this["JST"] = this["JST"] || {};

this["JST"]["app/templates/main-layout.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"row\">\n    <div class=\"col-sm-2 col-sm-offset-2\">\n        <h2 class=\"margin-top-0\">Reviews</h2>\n    </div>\n    <div class=\"col-sm-4\">\n        <a href=\"#\">Write a review for this product</a>\n    </div>\n</div>\n<div class=\"row\" id=\"product__reviews--collection\">\n\n</div>";
  });

this["JST"]["app/templates/review.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "";
  return buffer;
  }

  buffer += "<div class=\"col-sm-2\">\n    <div class=\"centered-image\">\n        <img src=\"app/img/"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.user)),stack1 == null || stack1 === false ? stack1 : stack1.avatar)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n        <span>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.user)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\n    </div>\n</div>\n<div class=\"col-sm-10\">\n    <div class=\"clearfix\">\n        <div class=\"pull-left margin-right-1\">\n            <h3 class=\"margin-top-0\">";
  if (stack2 = helpers.title) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.title); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "</h3>\n        </div>\n        <div class=\"pull-left margin-right-1\">\n            ";
  if (stack2 = helpers.date) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.date); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "\n        </div>\n        <div class=\"pull-left\">\n            ";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  stack2 = ((stack1 = helpers.starHelper || (depth0 && depth0.starHelper)),stack1 ? stack1.call(depth0, (depth0 && depth0.star_rating), options) : helperMissing.call(depth0, "starHelper", (depth0 && depth0.star_rating), options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n        </div>\n    </div>\n    <p>";
  if (stack2 = helpers.description) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.description); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "</p>\n</div>\n";
  return buffer;
  });