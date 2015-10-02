nicksFlix.controller('ReviewDisplayCtrl', function ReviewDisplayCtrl($scope, $stateParams, ReviewsFactory, UtilitiesFactory) {
  $scope.review = UtilitiesFactory.findById(ReviewsFactory.reviews, $stateParams.reviewId);
});
