myApp.directive('lazyImage', function() {
  return {
    scope: {
        src: "=src"
    },
    controller: ["$scope",function($scope) {
        $scope.src = $scope.src;
    }]
    templateUrl: 'app/shared/lazyImage/view.html'
  };
})