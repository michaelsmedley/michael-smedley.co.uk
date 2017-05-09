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
     controller:'WorkController',
     templateUrl: "app/components/work/view.html"  
    })
    .when('/work/:slug', {
     controller:'WorkController',
     templateUrl: "app/components/work/item.html"  
    })
    .when('/contact', {
     controller:'ContactController',
     templateUrl: "app/components/contact/view.html"   
    })
    .otherwise({
      controller:'ErrorController',
      templateUrl: "app/components/error/view.html"
    });
}]);