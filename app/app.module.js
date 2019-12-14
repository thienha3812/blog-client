(function(){
    "use strict"        
    angular.module("app",['app.core','app.landing','app.contact','app.blog-post','app.all-post','app.coding-post']).constant('ENV',{
        API_URL : 'http://127.0.0.1:5000'
    })
})()