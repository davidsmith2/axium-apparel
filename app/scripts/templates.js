define(['handlebars'], function(Handlebars) {

this["JST"] = this["JST"] || {};

this["JST"]["app/templates/layout.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"col-sm-12\">\n    <div class=\"row\">\n        <div class=\"col-sm-4 col-sm-offset-2 productReviewsHeader\">\n            <h2 class=\"productReviewsHeader-title\">Reviews</h2>\n            <ul class=\"productReviewsHeader-actions\">\n                <li>\n                    <a class=\"js-createReview\" href=\"#\">Write a review for this product</a>\n                </li>\n            </ul>\n        </div>\n    </div>\n    <div class=\"js-productReviewsCollectionRegion row\"></div>\n</div>\n";
},"useData":true});

this["JST"]["app/templates/modal.hbs"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "                <div class=\"modal-header\">\n                    "
    + container.escapeExpression(((helper = (helper = helpers.header || (depth0 != null ? depth0.header : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"header","hash":{},"data":data}) : helper)))
    + "\n                </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"modal fade\" id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" tabindex=\"-1\" role=\"dialog\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.header : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            <div class=\"modal-body\">\n                "
    + alias4(((helper = (helper = helpers.body || (depth0 != null ? depth0.body : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"body","hash":{},"data":data}) : helper)))
    + "\n            </div>\n            <div class=\"modal-footer\">\n                "
    + alias4(((helper = (helper = helpers.footer || (depth0 != null ? depth0.footer : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"footer","hash":{},"data":data}) : helper)))
    + "\n            </div>\n        </div>\n    </div>\n</div>";
},"useData":true});

this["JST"]["app/templates/review.hbs"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), alias4=helpers.helperMissing, alias5="function";

  return "<div class=\"col-sm-2\">\n    <figure class=\"review-figure\">\n        <img src=\"images/"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.avatar : stack1), depth0))
    + "\">\n        <figcaption>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.name : stack1), depth0))
    + "</figcaption>\n    </figure>\n</div>\n<div class=\"col-sm-8\">\n    <div class=\"review\">\n        <h3 class=\"review-title\">"
    + alias2(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h3>\n        <div class=\"review-date\">\n            "
    + alias2(((helper = (helper = helpers.date || (depth0 != null ? depth0.date : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"date","hash":{},"data":data}) : helper)))
    + "\n        </div>\n        <div class=\"review-starRating\">\n            "
    + ((stack1 = (helpers.renderStars || (depth0 && depth0.renderStars) || alias4).call(alias3,(depth0 != null ? depth0.star_rating : depth0),{"name":"renderStars","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n        </div>\n    </div>\n    <div>\n        <p>"
    + alias2(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"description","hash":{},"data":data}) : helper)))
    + "</p>\n    </div>\n</div>\n";
},"useData":true});

this["JST"]["app/templates/reviewModalBody.hbs"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<form class=\"product-review-form\">\n    <div class=\"margin-bottom-1 row\">\n        <div class=\"col-sm-7\">\n            <label class=\"font-size-large\" for=\"star-rating\">\n                Please Rate the <strong>Tough Mojo Jacket&reg;</strong>\n            </label>\n        </div>\n        <div class=\"col-sm-5\">\n            "
    + ((stack1 = (helpers.renderStars || (depth0 && depth0.renderStars) || alias2).call(alias1,5,{"name":"renderStars","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n        </div>\n    </div>\n    <div class=\"margin-bottom-1 row\">\n        <div class=\"col-sm-3\">\n            <label class=\"font-size-large\" for=\"title\">\n                Review Title:\n            </label>\n        </div>\n        <div class=\"col-sm-9\">\n            <input\n                class=\"js-editReviewText input-lg\"\n                id=\"title\"\n                name=\"title\"\n                style=\"width: 100%;\"\n                type=\"text\"\n                value=\""
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "\"\n            >\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n            <label class=\"sr-only\" for=\"description\">\n                Review Description\n            </label>\n            <textarea\n                class=\"js-editReviewText input-lg\"\n                name=\"description\"\n                placeholder=\"- Write your review here -\"\n                rows=\"5\"\n                style=\"width: 100%\"\n                value=\""
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "\"\n            ></textarea>\n        </div>\n    </div>\n</form>";
},"useData":true});

this["JST"]["app/templates/reviewModalFooter.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<a class=\"btn btn-primary js-submitReview\" href=\"#\">Submit Review</a>";
},"useData":true});

return this["JST"];

});