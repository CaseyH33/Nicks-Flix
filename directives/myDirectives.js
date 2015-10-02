// custom directive that toggles the css class night-mode
nicksFlix.directive("nightMode", function() {
  return function (scope, element, attrs) {
    element.bind("click", function() {
      var body = angular.element(document).find('body');
      body.toggleClass("night-mode");
    });
  }
});
