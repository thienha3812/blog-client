(function(){    
    angular.module("app.contact").config(config) 
    function config($stateProvider,$urlRouterProvider){             
        $stateProvider.state('Liên hệ',{
            name : "Contact",
            url : "/lien-he",            
            controller : "ContactController",
            templateUrl : "app/contact/contact.html"
        })
    }
})()