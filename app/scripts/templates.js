this["JST"] = this["JST"] || {};

this["JST"]["app/templates/layout.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"col-sm-12\">\n    <div class=\"row\">\n        <div class=\"col-sm-4 col-sm-offset-2 productReviewsHeader\">\n            <h2 class=\"productReviewsHeader-title\">Reviews</h2>\n            <ul class=\"productReviewsHeader-actions\">\n                <li>\n                    <a class=\"js-createReview\" href=\"#\">Write a review for this product</a>\n                </li>\n            </ul>\n        </div>\n    </div>\n    <div class=\"js-productReviewsCollectionRegion row\"></div>\n</div>\n";
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

  buffer += "<div class=\"col-sm-2\">\n    <figure class=\"pull-right\">\n        <img src=\"images/"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.user)),stack1 == null || stack1 === false ? stack1 : stack1.avatar)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n        <figcaption>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.user)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</figcaption>\n    </figure>\n</div>\n<div class=\"col-sm-8\">\n    <div class=\"clearfix\">\n        <div class=\"pull-left margin-right-1\">\n            <h3 class=\"margin-top-0\">";
  if (stack2 = helpers.title) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.title); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "</h3>\n        </div>\n        <div class=\"pull-left margin-right-1\">\n            ";
  if (stack2 = helpers.date) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.date); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "\n        </div>\n        <div class=\"pull-left\">\n            ";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  stack2 = ((stack1 = helpers.renderStars || (depth0 && depth0.renderStars)),stack1 ? stack1.call(depth0, (depth0 && depth0.star_rating), options) : helperMissing.call(depth0, "renderStars", (depth0 && depth0.star_rating), options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n        </div>\n    </div>\n    <div>\n        <p>";
  if (stack2 = helpers.description) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.description); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "</p>\n    </div>\n</div>\n";
  return buffer;
  });

this["JST"]["app/templates/reviewModalBody.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, self=this, helperMissing=helpers.helperMissing, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "";
  return buffer;
  }

  buffer += "<form class=\"product-review-form\">\n    <div class=\"margin-bottom-1 row\">\n        <div class=\"col-sm-7\">\n            <label class=\"font-size-large\" for=\"star-rating\">\n                Please Rate the <strong>Tough Mojo Jacket&reg;</strong>\n            </label>\n        </div>\n        <div class=\"col-sm-5\">\n            ";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  stack2 = ((stack1 = helpers.renderStars || (depth0 && depth0.renderStars)),stack1 ? stack1.call(depth0, 5, options) : helperMissing.call(depth0, "renderStars", 5, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n        </div>\n    </div>\n    <div class=\"margin-bottom-1 row\">\n        <div class=\"col-sm-3\">\n            <label class=\"font-size-large\" for=\"title\">\n                Review Title:\n            </label>\n        </div>\n        <div class=\"col-sm-9\">\n            <input\n                class=\"js-edit-review-text input-lg\"\n                id=\"title\"\n                name=\"title\"\n                style=\"width: 100%;\"\n                type=\"text\"\n                value=\"";
  if (stack2 = helpers.title) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.title); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "\"\n            >\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n            <label class=\"sr-only\" for=\"description\">\n                Review Description\n            </label>\n            <textarea\n                    class=\"js-edit-review-text input-lg\"\n                    name=\"description\"\n                    placeholder=\"- Write your review here -\"\n                    rows=\"5\"\n                    style=\"width: 100%\"\n                    value=\"";
  if (stack2 = helpers.description) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.description); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "\"\n            ></textarea>\n        </div>\n    </div>\n</form>";
  return buffer;
  });

this["JST"]["app/templates/reviewModalFooter.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<a class=\"btn btn-primary js-submit-review\" href=\"#\">Submit Review</a>";
  });