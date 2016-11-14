angular.module('app', [])
    .controller('gitHubDataController', ['$scope','$http', function($scope,$http) {

        $scope.reposLoaded = false;

        $scope.userLoaded = false;

        $http.get("https://api.github.com/users")
            .success(function (data) {
                $scope.usersData = data;
            });
}]);
