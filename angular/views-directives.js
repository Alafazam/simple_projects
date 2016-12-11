<!DOCTYPE html>
<html>
<head>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.5/angular.min.js"></script>
</head>

<body ng-app="myapp">

<div ng-controller="MyController" >
    <span>{{myData.text}}</span>
    <span>{{myData.printHello()}}</span>
</div>

  <script>
    angular.module("myapp", [])
    .controller("MyController", function($scope) {
      $scope.myData = {};
      $scope.myData.text = 'mydata ka text';
      $scope.myData.printHello = ()=>{return 'printHello'}
    });
  </script>

</body>
</html>