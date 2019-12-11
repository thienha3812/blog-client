(function() {
    'use strict';
    angular.module("app.contact").controller("ContactController",ContactController)
    function ContactController($scope,$http,$state){
        $scope.routeName = $state.$current.name
    }    
})();