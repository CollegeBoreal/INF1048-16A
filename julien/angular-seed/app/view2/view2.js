'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope','$location','$timeout',function($scope,$location,$timeout) {
//alert("switch page");
//$scope.tourne();

   var compteur_minutes = 0;
    var compteur_heures = 0;
    $scope.indic = true;
    $scope.isShow = true;
    var i =0;

     $scope.tourne = function  ()
		{
          
            //$scope.heures= $scope.aiguilleheure;
            // var minutes=$scope.aiguilleminute;
            //minutes= document.getElementById("aiguilleminute");
            var  minutes= document.getElementById("aiguilleminute");
            switch (compteur_minutes)
            {
                case 0: minutes.style.top="123px";minutes.style.left="250px"; break;
                case 1: minutes.style.top="160px";minutes.style.left="287px";break;
                case 2: minutes.style.top="210px";minutes.style.left="300px";break;
                case 3: minutes.style.top="260px";minutes.style.left="287px";break;
                case 4: minutes.style.top="297px";minutes.style.left="250px";break;
                case 5: minutes.style.top="310px";minutes.style.left="200px";break;
                case 6: minutes.style.top="297px";minutes.style.left="150px";break;
                case 7: minutes.style.top="260px";minutes.style.left="113px";break;
                case 8: minutes.style.top="210px";minutes.style.left="100px";break;
                case 9: minutes.style.top="160px";minutes.style.left="113px";break;
                case 10: minutes.style.top="123px";minutes.style.left="150px";break;
                case 11: minutes.style.top="110px";minutes.style.left="200px";break
                default: alert("Y'a un bug!"); break;
            }

            compteur_minutes=(compteur_minutes+1) % 12;
			if(i==11)
      {
        $location.path("/view1");
      }

      if($scope.indic)
      {
          $timeout(
            function()
            {
                 i++;
                 $scope.tourne();
            }
            ,1000
          )
      }
		}
    
$scope.myToggle = function () {
 $scope.isShow = !$scope.isShow;
}

   // $scope.tourne();

$scope.todos = [
            {'name':'Tache 1'},
            {'name':'Tache 2'},
            {'name':'Tache 3'}
            ];


}]);

