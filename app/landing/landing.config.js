(function(){    
    angular.module("app.landing").config(config) 
    function config($stateProvider,$urlRouterProvider){
        $urlRouterProvider.otherwise("/trangchu")
        $stateProvider.state('landing',{
            name : "Landing",
            url : "/trangchu",            
            controller : "LandingController",
            templateUrl : "app/landing/landing.html"
        })
    }
})()