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
        templateUrl: "partials/reviews.html",
        controller: "ReviewsCtrl"
      }
    }
  });

  $stateProvider.state('reviews.reviewDisplay', {
    url: "/:reviewId",
    views: {
      'header': {
        templateUrl: "partials/header.html"
        // controller: "HeadersCtrl"
      },
      'body': {
        templateUrl: "partials/reviews.reviewDisplay.html",
        controller: "ReviewDisplayCtrl"
      }
    }
  });
});
