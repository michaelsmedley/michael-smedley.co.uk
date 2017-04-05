var myApp = angular.module('_michaelsmedleycouk',['ngRoute','ngAnimate']);

myApp.run(["$rootScope","$http",function($rootScope,$http) {
    $rootScope.nav = [
    {"name":"About","link":"/mysite17/about"},
    {"name":"Work","link":"/mysite17/work"},
    {"name":"Contact","link":"/mysite17/contact"}
    ];
}]);