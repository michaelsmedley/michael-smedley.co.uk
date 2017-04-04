myApp.controller("AboutController", ["$scope", "$routeParams", function($scope, $routeParams) {
     $scope.name = 'AboutController';
     $scope.params = $routeParams;

     $scope.metaDesc = "here is the meta for the about page";
}]);