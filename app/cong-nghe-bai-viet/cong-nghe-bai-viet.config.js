(function(){    
    angular.module("app.tech-post").config(config) 
    function config($stateProvider,$urlRouterProvider){             
        $stateProvider.state('Công nghệ',{
            name : "TechPost",
            url : "/cong-nghe",            
            controller : "TechPostController",
            templateUrl : "app/cong-nghe-bai-viet/cong-nghe-bai-viet.html"
        })
    }
})()