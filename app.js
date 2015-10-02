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

  $stateProvider.state('review', {
    url: "/review",
    views: {
      'header': {
        templateUrl: "partials/header.html"
        // controller: "HeadersCtrl"
      },
      'list': {
        templateUrl: "partials/list.html"
      }
      'body': {
        templateUrl: "partials/review.html",
        controller: "ReviewsCtrl"
      }
    }
  });
});
