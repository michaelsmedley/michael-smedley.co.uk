myApp.controller("ContactController", ["$scope", "$routeParams", "$rootScope", function($scope, $routeParams,$rootScope) {
     $scope.name = 'ContactController';
     $scope.params = $routeParams;

     $rootScope.metaDesc = "here is the meta for the contact page";

     $scope.links = [
     {"label":"Twitter","link":"https://twitter.com/smdly"},
     {"label":"Instagram","link":"https://www.instagram.com/mikesmedley/"},
     {"label":"LinkedIn","link":"https://www.linkedin.com/in/smdly/"},
     {"label":"Medium","link":"https://medium.com/@smdly/"},
     {"label":"Codepen","link":"https://codepen.io/smdly/"},
     {"label":"Github","link":"https://github.com/michaelsmedley/"}
     ];
}]);