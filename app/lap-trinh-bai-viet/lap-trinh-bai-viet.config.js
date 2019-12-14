(function(){    
    angular.module("app.coding-post").config(config) 
    function config($stateProvider,$urlRouterProvider){             
        $stateProvider.state('Lập trình',{
            name : "CodingPost",
            url : "/lap-trinh",            
            controller : "CodingPostController",
            templateUrl : "app/lap-trinh-bai-viet/lap-trinh-bai-viet.html"
        })
    }
})()