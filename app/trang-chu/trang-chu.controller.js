(function() {
    "use strict";
    angular
      .module("app.landing")
      .controller("LandingController", LandingController);
    function LandingController($scope, $http, $state, ENV) {      
      $http.get(ENV.API_URL + "/post/mostread").then(result => {
        $scope.mostReadPost = result.data;                
      });
      $http.get(ENV.API_URL + "/post/newspost").then(result => {            
        $scope.newsPost = result.data;
        $scope.newsPost.forEach(x => {
          x.create_at = moment(x.create_at).format("LL");
        });
        $scope.middlePost = $scope.newsPost.slice(3);        
      });
      $http.get(ENV.API_URL + "/post/mostreadinday").then(result => {
            $scope.mostReadInDay = result.data            
            $scope.mostReadInDay.forEach(x =>{
                x.create_at = moment(x.create_at).format("LL")
            })                        
      });
      $scope.navigateTo = function(){
        window.location.href = "/#!/tong-hop-bai-viet"
      }
    }
  })();
  