myApp.directive('lazyImage', function() {
  return {
    scope: {
        src: "=src"
    },
    templateUrl: 'app/shared/lazyImage/view.html'
  };
})