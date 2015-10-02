nicksFlix.factory('ReviewsFactory', function ReviewsFactory() {
  var factory = {};
  factory.reviews = [];
  factory.addReview = function() {
    factory.reviews.push({title: factory.reviewTitle, factory.reviewBody});
    factory.reviewTitle = null;
    factory.reviewBody = null;
  };
  return factory;
});
