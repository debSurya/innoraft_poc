app.directive('permissions', ['$rootScope', 'localStorageGetterSetter', function ($rootScope, localStorageGetterSetter) {
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
            $scope.retrievedDetails = localStorageGetterSetter.getItem('user1Details') || [];
            $scope.$watch('permissions', function () {
                currentRoles = $scope.permissions.split(',');
                currentRoles.map(function (item) {
                    $scope['user' + item + 'Active'] = true;
                });
            });

            $scope.storeDetails = function () {
                $scope.retrievedDetails.push($scope.user1Details);
                localStorageGetterSetter.setItem('user1Details', $scope.retrievedDetails);
                $scope.user1Details = "";
                $scope.isStored = true;
            };

            $scope.deleteDetails = function (index) {
                $scope.retrievedDetails.splice(index, 1);
                localStorageGetterSetter.setItem('user1Details', $scope.retrievedDetails);
            };
        }
    };
}]);