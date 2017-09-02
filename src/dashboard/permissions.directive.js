app.directive('permissions', ['$window', '$rootScope', function ($window, $rootScope) {
    return {
        restrict: 'A',
        transclude: true,
        scope: {
            permissions: '@'
        },
        templateUrl: './src/dashboard/userDetails.html',
        controller: function ($scope) {
            var currentRoles;
            $scope.isStored = $scope.isDeleted = false;
            $scope.$watch('permissions', function () {
                currentRoles = $scope.permissions.split(',');
                currentRoles.map(function (item) {
                    $scope['user' + item + 'Active'] = true;
                });
            });

            $scope.storeDetails = function () {
                $window.localStorage.setItem('user1Details', $scope.user1Details);
                $scope.user1Details = "";
                $scope.isStored = true;
            };

            $scope.deleteDetails = function () {
                $window.localStorage.removeItem('user1Details');
                $scope.retrievedDetails = "";
                $scope.isDeleted = true;
            };

            $scope.retrievedDetails = $window.localStorage.getItem('user1Details');
        }
    };
}]);