TMDb.controller('productZoomController', ['$scope', 'ApiCall', '$rootScope', '$state', '$stateParams', '$timeout', 'myStorageService', '$ocLazyLoad', '$window', '$http',
function ($scope, ApiCall, $rootScope, $state, $stateParams, $timeout, myStorageService, $ocLazyLoad, $window, $http) {
    $rootScope.Loder = true;

    $scope.setSegmentCode = $stateParams.segmentid;
    $scope.setMovideCode = $stateParams.dataID;




    $window.scrollTo(0, 0);
    $scope.init = function () {
        
        if ($scope.setSegmentCode == 'movies') {

            $scope.getProduct_moviesList();
        }
        else if ($scope.setSegmentCode == 'tvshows') {

            $scope.getProduct_tvshowsList();
        }
        else {
            $state.go('indexbody');
        }


        $rootScope.Loder = false;
    };
    //=================================================================================================
    $scope.getProduct_moviesList = function (pageNum) {
      

        $http({
            method: "GET",
            url: "https://api.themoviedb.org/3/movie/" + $scope.setMovideCode + "?api_key=fe7695a425f8c62b446aea15cd9ea173&language=en-US"
        }).then(function mySuccess(response) {
            $scope.get_ListMovies = response.data;
           



        });

        $http({
            method: "GET",
            url: "https://api.themoviedb.org/3/movie/" + $scope.setMovideCode + "/similar?api_key=fe7695a425f8c62b446aea15cd9ea173&language=en-US&page=1"
        }).then(function mySuccess(response) {
            $scope.get_ListSimilarMovies = response.data.results;




        });

        $http({
            method: "GET",
            url: "https://api.themoviedb.org/3/movie/" + $scope.setMovideCode + "/credits?api_key=fe7695a425f8c62b446aea15cd9ea173"
        }).then(function mySuccess(response) {
            $scope.get_Top_Billed_CastMovies = response.data.cast;




        });
    }

    $scope.getProduct_tvshowsList = function (pageNum) {
      
    

        $http({
            method: "GET",

            url: "http://api.themoviedb.org/3/discover/tv?api_key=fe7695a425f8c62b446aea15cd9ea173&page=" + $scope.pageNum + "&sort_by=popularity.desc"
        }).then(function mySuccess(response) {
            $scope.get_ListTvshows = response.data.results;
            $scope.TotalPage = response.data.total_pages;

            $scope.CurrentPage = response.data.page;



        });
    }

    

}]);


