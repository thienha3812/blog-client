(function() {
    'use strict';
    angular.module("app.landing").controller("LandingController",LandingController)
    function LandingController($scope,$http){           
        $http.get("http://127.0.0.1:5000/post/mostread").then(result=>{
            $scope.mostReadPost = result.data
        })
        $http.get("http://127.0.0.1:5000/post/newspost").then(result=>{
            $scope.newsPost = result.data
            $scope.newsPost.forEach(x=>{
                x.create_at = moment(x.create_at).format("LL")
            })
            console.log($scope.newsPost)
        })
    }
})();