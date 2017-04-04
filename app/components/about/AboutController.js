myApp.controller("AboutController", ["$scope", "$routeParams", "$rootScope", function($scope, $routeParams,$rootScope) {
     $scope.name = 'AboutController';
     $scope.params = $routeParams;

     $rootScope.metaDesc = "here is the meta for the about page";
}]);