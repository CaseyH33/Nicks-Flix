var nicksFlix = angular.module('nicksFlix', ['ui.router']);

nicksFlix.config(function($stateProvider, $urlRouterProvider) {
  //Home page
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

  //Lists all reviews and displays the form to add new reviews
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

  // Displays title and body of the review clicked on
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
