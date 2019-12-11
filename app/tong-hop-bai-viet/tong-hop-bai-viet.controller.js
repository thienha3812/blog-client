(function() {
    'use strict';    
    angular.module("app.all-post").controller("AllPostController",AllPostController)
    function AllPostController($scope,$http,$state,ENV){
        $scope.currentPaginationIndex = 1
        $scope.routeName = $state.$current.name
        $http({
            method  : "POST",
            url : ENV.API_URL + "/post/allpost",
            data : {start : 0}
        }).then((result)=>{
            console.log(result.data)
            $scope.post = result.data
            $scope.post.forEach(x =>{
                x.create_at = moment(x.create_at).format("LL");
            })
        })
        $http.get(ENV.API_URL + "/post/mostread").then(result => {
            $scope.mostReadPost = result.data;                
        });
    }    
})();