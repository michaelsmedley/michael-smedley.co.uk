var myApp = angular.module('_michaelsmedleycouk',['ngRoute','ngAnimate','afkl.lazyImage']);

myApp.run(["$rootScope","$http","$location","$routeParams",function($rootScope,$http,$location,$routeParams) {
    $rootScope.nav = [
    {"name":"About","link":"/#!/about"},
    {"name":"Work","link":"/#!/work"},
    {"name":"Contact","link":"/#!/contact"}
    ];
    $rootScope.$location = $location;
    $rootScope.currentPath = "/#!" + $location.path();

    $rootScope.$on("$routeChangeSuccess",function(ev, next,current) {

        if(next.originalPath.indexOf("work") > 0) {
            $rootScope.currentPath = "/#!/work";
        } else {
            $rootScope.currentPath = "/#!" + next.originalPath;
        }
    });
}]);