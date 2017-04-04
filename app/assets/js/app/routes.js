myApp.config(["$routeProvider","$locationProvider",function($routeProvider,$locationProvider) {

 
  $routeProvider
    .when('/', {
      controller:'IndexController',
      templateUrl: "app/components/Index/view.html"
    })
    .when('/about', {
     controller:'AboutController',
     templateUrl: "app/components/about/view.html"
    })
    .when('/work', {
     controller:'WorkController'    
    })
    .when('/work:slug', {
     controller:'WorkController'    
    })
    .when('/contact/', {
     controller:'ContactController'    
    })
    .otherwise({
      redirectTo:'/'
    });

    $locationProvider.html5Mode(true);
}]);