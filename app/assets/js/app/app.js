var myApp = angular.module('_michaelsmedleycouk',['ngRoute','ngAnimate','afkl.lazyImage']);

myApp.run(["$rootScope","$http","$location",function($rootScope,$http,$location) {
    $rootScope.nav = [
    {"name":"About","link":"/#!/about"},
    {"name":"Work","link":"/#!/work"},
    {"name":"Contact","link":"/#!/contact"}
    ];
    $rootScope.$location = $location;
    $rootScope.currentPath = "/#!" + $location.path();
}]);