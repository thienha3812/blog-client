(function(){    
    angular.module("app.any-post").config(config) 
    function config($stateProvider,$urlRouterProvider){             
        $stateProvider.state('Linh tinh',{
            name : "AnyPost",
            url : "/linh-tinh",            
            controller : "AnyPostController",
            templateUrl : "app/linh-tinh-bai-viet/linh-tinh-bai-viet.html"
        })
    }
})()