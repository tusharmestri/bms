TMDb.controller('productController', ['$scope', 'ApiCall', '$rootScope', '$state', '$stateParams', '$timeout', 'myStorageService', '$ocLazyLoad', '$window','$http',
function ($scope, ApiCall, $rootScope, $state, $stateParams, $timeout, myStorageService, $ocLazyLoad, $window, $http) {
    $rootScope.Loder = true;

    $scope.setSegmentCode = $stateParams.segmentid;



  
    $window.scrollTo(0, 0);
    $scope.init = function () {
        $scope.posterSliderUrl = 'https://image.tmdb.org/t/p/';
        if ($scope.setSegmentCode == 'movies')
        {
            $scope.getProduct_moviesList();
        }
        else if ($scope.setSegmentCode == 'tvshows') {

            $scope.getProduct_tvshowsList();
        }
        else
        {
            $state.go('indexbody');
        }

        
        $rootScope.Loder = false;
    };
    //=================================================================================================
    $scope.getProduct_moviesList = function (pageNum)
    {
        $scope.setName = 'Movies';
        if (pageNum != null)
        {
            
            $scope.pageNum = pageNum;
        }
        else
        {
            $scope.pageNum = 1;
        }
        
        $http({
            method: "GET",
            url: "https://api.themoviedb.org/3/movie/now_playing?page=" + $scope.pageNum + "&l&region=IN&api_key=fe7695a425f8c62b446aea15cd9ea173"
        }).then(function mySuccess(response)
        {
            $scope.get_ListMovies = response.data.results;
            $scope.TotalPage = response.data.total_pages;
            $scope.CurrentPage = response.data.page;
            
            
            
        });
    }

    $scope.getProduct_tvshowsList = function (pageNum) {
        $scope.setName = 'Tv Shows';
        if (pageNum != null) {

            $scope.pageNum = pageNum;
        }
        else {
            $scope.pageNum = 1;
        }

        $http({
            method: "GET",
            
            url: "http://api.themoviedb.org/3/discover/tv?api_key=fe7695a425f8c62b446aea15cd9ea173&page=" + $scope.pageNum + "&sort_by=popularity.desc"
        }).then(function mySuccess(response) {
            $scope.get_ListTvshows = response.data.results;
            $scope.TotalPage = response.data.total_pages;

            $scope.CurrentPage = response.data.page;



        });
    }
 
    $scope.pageNext = function()
    {
        
        $scope.pageNumNext = $scope.CurrentPage + 1;
        $window.scrollTo(0, 0);

        if ($scope.setSegmentCode == 'movies') {
            $scope.getProduct_moviesList($scope.pageNumNext);
        }
        else if ($scope.setSegmentCode == 'tvshows') {

            $scope.getProduct_tvshowsList($scope.pageNumNext);
        }

        

    }
    $scope.pagePrv = function()
    {
   
        $scope.pageNumNext = $scope.CurrentPage - 1;
        $window.scrollTo(0, 0);
        if ($scope.setSegmentCode == 'movies') {
            $scope.getProduct_moviesList($scope.pageNumNext);
        }
        else if ($scope.setSegmentCode == 'tvshows') {

            $scope.getProduct_tvshowsList($scope.pageNumNext);
        }


    }
   

}]);


