(function() {
    'use strict';    
    angular.module("app.all-post").controller("AllPostController",AllPostController)
    function AllPostController($scope,$http,$state,ENV){
        $scope.currentPaginationIndex = 1
        $scope.routeName = $state.$current.name
        $scope.currentPaginationIndex = 1         
        // Get data when page loaded
        $http({
            method  : "POST",
            url : ENV.API_URL + "/post/allpost",
            data : {start : 0}
        }).then((result)=>{            
            $scope.post = result.data
            $scope.post.forEach(x =>{
                x.create_at = moment(x.create_at).format("LL");
            })
        })
        $http.get(ENV.API_URL + "/post/mostread").then(result => {
            $scope.mostReadPost = result.data;                
        });
        $http.post(ENV.API_URL + "/post/getlenpagination", {"category" : "TỔNG HỢP"}).then(result =>{            
            $scope.lengthPagination = Math.ceil(result.data.length/10)
            $scope.pagination = Array.from(new Array($scope.lengthPagination+1).keys()).filter(x => x>0)  
            $scope.currentPagination = $scope.pagination.slice(0,8)                                          
        })
        $scope.selectPaginate = function(event,index){                  
            let current = event.currentTarget || event.srcElement          
            let length = $scope.currentPagination.length                    
            if(index > 2  && (index == $scope.currentPagination[length-1] || index == $scope.currentPagination[0])){                
                $scope.currentPagination = $scope.pagination.slice(index-2,index+4)
            }
            let item = document.getElementsByClassName("_pagination")
            for(let i = 0;i<item.length;i++){
                item[i].classList.remove('current') 
            }
            current.classList.add("current")   
            $http({
                method  : "POST",
                url : ENV.API_URL + "/post/allpost",
                data : {start : (index-1)*0}
            }).then((result)=>{                            
                $scope.post = result.data
                $scope.post.forEach(x =>{
                    x.create_at = moment(x.create_at).format("LL");
                })
            })         
        }
    }    
})();