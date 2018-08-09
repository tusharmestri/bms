TMDb.controller('indexBodyController', ['$scope', 'ApiCall', '$rootScope', '$state', '$timeout', 'myStorageService', '$ocLazyLoad', '$window','$http',
function ($scope, ApiCall, $rootScope, $state, $timeout, myStorageService, $ocLazyLoad, $window, $http) {



        $window.scrollTo(0, 0);
        $scope.init = function () {
            $scope.MainPageSlider();
            $scope.SpecialOff();
            $scope.getTVSerial();
            $scope.posterSliderUrl = 'https://image.tmdb.org/t/p/';
        }

        //================================================
        $scope.MainPageSlider = function () {
            $http({
                method: "GET",
                url: "https://api.themoviedb.org/3/discover/movie?api_key=fe7695a425f8c62b446aea15cd9ea173&region=IN&with_original_language=hi&release_date.gte=2018-08-01&release_date.lte=2018-08-31"
            }).then(function mySuccess(response) {
                $scope.myPosterList = response.data.results;
                $scope.getImagesData = [];
                angular.forEach($scope.myPosterList, function (value, key) {
                    if (value.backdrop_path != null) {
                        $scope.getImagesData.push({ "bgPosterName": value.backdrop_path, "title": value.title, "release_date": value.release_date, "movieID": value.id });

                    }
                });

                $scope.slickConfig2Loaded = true;
                $scope.slickConfig2 = {
                    enabled: true,
                    dots: true,
                    speed: 800,
                    autoplay:true,
                    arrows: false,
                    method: {},
                    event: {
                        beforeChange: function (event, slick, currentSlide, nextSlide) {
                        },
                        afterChange: function (event, slick, currentSlide, nextSlide) {
                        }
                    }
                    
                };

                $scope.slickConfig3Loaded = true;
                $scope.slickConfig3 = {
                    enabled: true,
                    dots: false,
                    speed: 800,
                    arrows: false,
                    autoplay: true,
                    autoplaySpeed: 3500,
                    method: {}
                };



            });



        }

        $scope.SpecialOff = function () {
         
            $http({
                method: "GET",
                url: "https://api.themoviedb.org/3/movie/now_playing?page=1&l&region=IN&api_key=fe7695a425f8c62b446aea15cd9ea173"
            }).then(function mySuccess(response)
            {
                $scope.getSpecialOff = response.data.results;
               
                });
               

                //$scope.getSpecialOff = dataIn.ProductList;

                $scope.slickConfig4Loaded = true;
                $scope.slickConfig4 = {
                    method: {},
                    //dots: true,
                    infinite: true,
                    speed: 800,
                    autoplay: true,
                    slidesToShow: 1,
                    
                    
                };
           
            $rootScope.Loder = false;
        }

        $scope.getTVSerial = function ()
        {

            $http({
                method: "GET",
                url: "http://api.themoviedb.org/3/discover/tv?api_key=fe7695a425f8c62b446aea15cd9ea173&page=1&sort_by=popularity.desc"
            }).then(function mySuccess(response) {
                $scope.getTvSer = response.data.results;

            });

        }



    }
])