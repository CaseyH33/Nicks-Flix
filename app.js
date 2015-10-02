var nicksFlix = angular.module('nicksFlix', ['ui.router']);

nicksFlix.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
    url: "",
    views: {
      'header': {
        templateUrl: "partials/header.html"
        // controller: "HeadersCtrl"
      },
      'body': {
        templateUrl: "partials/home.html"
      }
    }
  });

  $stateProvider.state('reviews', {
    url: "/reviews",
    views: {
      'header': {
        templateUrl: "partials/header.html"
        // controller: "HeadersCtrl"
      },
      'body': {
        templateUrl: "partials/review.html",
        controller: "ReviewsCtrl"
      }
    }
  });

  $stateProvider.state('reviews.review', {
    url: "/:reviewId",
    views: {
      'header': {
        templateUrl: "partials/header.html"
        // controller: "HeadersCtrl"
      },
      'body': {
        templateUrl: "partials/review.html",
        controller: "ReviewsCtrl"
      }
    }
  });
});
