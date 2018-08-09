'use strict';

TMDb.config(['$ocLazyLoadProvider', 'localStorageServiceProvider', '$stateProvider', '$urlRouterProvider', '$locationProvider',
    function ($ocLazyLoadProvider, localStorageServiceProvider, $stateProvider, $urlRouterProvider, $locationProvider) {
        localStorageServiceProvider.setPrefix('TMDb');

        $ocLazyLoadProvider.config({
            debug: false,
            events: true,
        });

        $urlRouterProvider.otherwise('/index.html');
        //$locationProvider.html5Mode(true);

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });


        $stateProvider
        .state('indexbody', {
            url: '/index.html',
            controller: 'indexBodyController',
            templateUrl: 'angular_views/Index/indexbody.html',
            resolve: {
                loadMyFile: function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'TMDb',
                        files: ['angular_scripts/controllers/indexBodyController.js']
                    })
                }
            }
        }).state('movies', {
            url: '/:segmentid',
            controller: 'productController',
            templateUrl: 'angular_views/Product/product.html',
            resolve: {
                loadMyFile: function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'TMDb',
                        files: ['angular_scripts/controllers/productController.js']
                    })
                }
            }
        }).state('singleData', {
            url: '/:segmentid/:dataID',
            controller: 'productZoomController',
            templateUrl: 'angular_views/ProductDetails/productzoom.html',
            resolve: {
                loadMyFile: function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'TMDb',
                        files: ['angular_scripts/controllers/productZoomController.js']
                    })
                }
            }
        });
       
       

        

    }
]);