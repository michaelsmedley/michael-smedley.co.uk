myApp.controller("WorkController", ["$scope", "$routeParams", "$rootScope","$http", function($scope, $routeParams,$rootScope,$http) {
     $scope.name = 'WorkController';
     $scope.params = $routeParams;

     $rootScope.metaDesc = "here is the meta for the work page";

     /**
      * If we are on the homepage, we need to get the work item
      */
     if(!$scope.params.slug) {
         $http.get('/www/assets/js/work.json').then(function(response) {
            $scope.workItems = response.data;
         });
     } else {
        $http.get('/www/assets/js/work-item.json').then(function(response) {
            $scope.workItem = response.data;
         });
     }
}]);