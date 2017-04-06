myApp.controller("ContactController", ["$scope", "$routeParams", "$rootScope", function($scope, $routeParams,$rootScope) {
     $scope.name = 'ContactController';
     $scope.params = $routeParams;

     $rootScope.metaDesc = "here is the meta for the contact page";
}]);