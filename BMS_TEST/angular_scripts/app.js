/// <reference path="~/Angular_components/angular/angular/angular.min.js" />
'use strict';

var TMDb = angular
    .module('TMDb', ['oc.lazyLoad', 'ui.router', 'ui.bootstrap', 'LocalStorageModule', 'slickCarousel']);


TMDb.controller('rootController', ['$scope', '$state', '$stateParams', '$rootScope', '$document', '$timeout',
    function ($scope, $state, $stateParams, $rootScope, $document,$timeout )
{
    $rootScope.$state = $state;

    $rootScope.$stateParams = $stateParams;

    $rootScope.Loder = true;

    $rootScope.ImageBaseServer = "https://image.tmdb.org/t/p/";
 
    $rootScope.$on("$viewContentLoaded", function ()
    {



        
        var includeForScrollTop = ['TMDb.indexbody', 'TMDb.movies'];

        var curretnState = $state.current.name;
     
    });
}]);



TMDb.filter('html', ['$sce', function ($sce) {
    return function (text) {
        return $sce.trustAsHtml(text);
    };
}])

TMDb.filter('capitalize', function () {
    return function (input) {
        return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    }
});

TMDb.config(['slickCarouselConfig', function (slickCarouselConfig) {
    slickCarouselConfig.dots = true;
    slickCarouselConfig.autoplay = false;
}]);


