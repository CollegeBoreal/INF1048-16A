'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope','$location',function($scope,$location) {
  $scope.buttonTapLogin = function()
  {

    //$location.path("/view2");
    if ($scope.validation() == true){
      $location.path("/view2");
    }
  }

$scope.validation = function(){
  //var userName = document.getElementById("userName").value;
  //var userPsw = document.getElementById("userPsw").value;

  if($scope.userName == "Julien1" && $scope.userPsw == "132"){
    return true;
  }else{
    alert('fail');
    $scope.error = "error";
    return false;
  }
}
  
}]);

