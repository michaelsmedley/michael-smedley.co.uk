myApp.directive('lazyImage', function() {
  return {
    scope: {
        src: "@"
    },
    templateUrl: 'app/shared/lazyImage/view.html'
  };
})