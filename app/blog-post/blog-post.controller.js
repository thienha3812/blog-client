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

            const { post_content,post_title,img_src} = result.data[0]
            console.log(result.data)
            $scope.post_content = $sce.trustAsHtml(post_content)                                
            $scope.post_title = post_title
            console.log(post_title)
            $scope.speaker.img = img_src                                         
        }).then(()=>{
            $scope.isLoaded = true
        })  
        
    }    
})();