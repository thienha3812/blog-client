(function(){    
    angular.module("app.blog-post").config(config) 
    function config($stateProvider,$urlRouterProvider){        
        $stateProvider.state('Bài viết',{
            name : "Blog-post",
            url : "/bai-viet",            
            controller : "BlogPostController",
            templateUrl : "app/blog-post/blog-post.html"
        })
    }
})()