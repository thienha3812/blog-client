(function() {
    'use strict';
    angular.module("app.blog-post").controller("BlogPostController",BlogPostController)
    function BlogPostController($scope,$http,$state,$location,ENV,$sce){
        $scope.speaker = {};
        $scope.speaker.img =""
        $scope.isLoaded = false
        if(!$location.$$search.id){
            window.location.href = "/#!/trang-chu"
            return
        }
        $http({
            method : 'POST',
            url : ENV.API_URL + '/post/loadpostbyid',
            data : {
                id : $location.$$search.id
            }
        }).then((result)=>{
            console.log(result)
            const {create_at,category,post_content,post_title,img_src} = result.data[0]            
            $scope.create_at =  moment(create_at).format("LL");
            $scope.category = category
            $scope.post_content = $sce.trustAsHtml(post_content)                                
            $scope.post_title = post_title            
            $scope.speaker.img = img_src                                         
        }).then(()=>{
            $scope.isLoaded = true
        })  
        $http.get(ENV.API_URL + "/post/mostread").then(result => {
            $scope.mostReadPost = result.data;                
        });
        
    }    
})();