var myApp = angular.module('_michaelsmedleycouk',['ngRoute','ngAnimate']);

myApp.run(["$rootScope","$http","$location",function($rootScope,$http,$location) {
    $rootScope.nav = [
    {"name":"About","link":"/mysite17/#!/about"},
    {"name":"Work","link":"/mysite17/#!/work"},
    {"name":"Contact","link":"/mysite17/#!/contact"}
    ];
    $rootScope.$location = $location;
}]);