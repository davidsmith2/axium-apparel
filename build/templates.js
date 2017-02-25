this["JST"] = this["JST"] || {};

this["JST"]["app/templates/layout.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"row\">\n    <div class=\"col-sm-2 col-sm-offset-2\">\n        <h2 class=\"margin-top-0\">Reviews</h2>\n    </div>\n    <div class=\"col-sm-4\">\n        <a class=\"js-create-review\" href=\"#\">Write a review for this product</a>\n    </div>\n</div>\n<div class=\"row\" id=\"product__reviews--collection\">\n\n</div>";
  });

this["JST"]["app/templates/modal.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                <div class=\"modal-header\">\n                    ";
  if (stack1 = helpers.header) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.header); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n                </div>\n            ";
  return buffer;
  }

  buffer += "<div class=\"modal fade\" id=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.id); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" tabindex=\"-1\" role=\"dialog\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.header), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            <div class=\"modal-body\">\n                ";
  if (stack1 = helpers.body) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.body); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n            </div>\n            <div class=\"modal-footer\">\n                ";
  if (stack1 = helpers.footer) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.footer); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n            </div>\n        </div>\n    </div>\n</div>";
  return buffer;
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

this["JST"]["app/templates/reviewModalBody.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<form class=\"row\">\n    <div class=\"col-sm-12 margin-bottom-1\">\n        <div class=\"row\">\n            <div class=\"col-sm-6\">\n                <label for=\"star-rating\">\n                    Please rate the Tough Mojo Jacket\n                </label>\n            </div>\n            <div class=\"col-sm-6\"></div>\n        </div>\n    </div>\n    <div class=\"col-sm-12 margin-bottom-1\">\n        <div class=\"row\">\n            <div class=\"col-sm-3\">\n                <label for=\"title\">\n                    Review Title\n                </label>\n            </div>\n            <div class=\"col-sm-9\">\n                <input\n                    class=\"js-input input-lg\"\n                    id=\"title\"\n                    name=\"title\"\n                    type=\"text\"\n                    style=\"width: 100%\"\n                    value=\"";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.title); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"\n                >\n            </div>\n        </div>\n    </div>\n    <div class=\"col-sm-12 margin-bottom-1\">\n        <label class=\"sr-only\" for=\"description\">\n            Review Description\n        </label>\n        <textarea\n            class=\"js-input input-lg\"\n            name=\"description\"\n            placeholder=\"- Write your review here -\"\n            style=\"width: 100%\"\n            value=\"";
  if (stack1 = helpers.description) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.description); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"\n        >\n        </textarea>\n    </div>\n</form>";
  return buffer;
  });

this["JST"]["app/templates/reviewModalFooter.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<a class=\"btn btn-primary js-submit-review\" href=\"#\">Submit Review</a>";
  });