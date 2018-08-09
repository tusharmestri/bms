TMDb.controller('headerFooterController', ['$scope', 'ApiCall', '$rootScope', '$state', '$timeout', 'myStorageService', '$ocLazyLoad', '$window',
    function ($scope, ApiCall, $rootScope, $state, $timeout, myStorageService, $ocLazyLoad,  $window) {



        $window.scrollTo(0, 0);
        $scope.init = function () {
            $scope.getMenu_segment();
           


        }

        //============= Get Menu ===========

        $scope.getMenu_segment = function () {
            var segmentArray = [       
                               { "ID": "1", "SegmentName": "Movie", "SegmentURL": "movies", },
                               { "ID": "2", "SegmentName": "TV Shows", "SegmentURL": "tvshows", },
                               { "ID": "3", "SegmentName": "Genre" },
                              
                                ]
            $scope.getMenu = segmentArray;
                $rootScope.Loder = false;
           


        }
        
        

    }
])