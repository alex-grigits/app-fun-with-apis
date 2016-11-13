var app = angular.module('myApp', []);

app.controller('myCtrl1', function($scope) {
  $scope.name = "Alex";
});

app.controller('myCtrl2', function($scope) {
  $scope.name = "Andrey";
});
