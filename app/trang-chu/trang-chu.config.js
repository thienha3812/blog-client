(function(){    
    angular.module("app.landing").config(config) 
    function config($stateProvider,$urlRouterProvider){
        $urlRouterProvider.otherwise("/trang-chu")    
        $stateProvider.state('Trang chủ',{
            name : "Landing",
            url : "/trang-chu",            
            controller : "LandingController",
            templateUrl : "app/trang-chu/trang-chu.html"
        })
    }
})()