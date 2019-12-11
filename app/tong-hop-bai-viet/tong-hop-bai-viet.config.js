(function(){    
    angular.module("app.all-post").config(config) 
    function config($stateProvider,$urlRouterProvider){             
        $stateProvider.state('Tổng hợp bài viết',{
            name : "AllPost",
            url : "/tong-hop-bai-viet",            
            controller : "AllPostController",
            templateUrl : "app/tong-hop-bai-viet/tong-hop-bai-viet.html"
        })
    }
})()