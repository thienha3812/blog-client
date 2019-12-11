(function(){    
    angular.module("app.about").config(config) 
    function config($stateProvider,$urlRouterProvider){             
        $stateProvider.state('about',{
            name : "About",
            url : "/vetoi",            
            // controller : "ContactController",
            templateUrl : "app/about/about.html"
        })
    }
})()