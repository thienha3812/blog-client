(function(){
    "use strict"        
    angular.module("app",['app.core','app.landing','app.contact','app.blog-post','app.all-post','app.coding-post','app.any-post','app.tech-post']).constant('ENV',{
        API_URL : 'http://localhost:5000'
    })
})()