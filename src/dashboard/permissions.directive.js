app.directive('permissions', ['$window', function ($window) {
    return {
        restrict: 'A',
        transclude: true,
        scope: {
            permissions: '@'
        },
        templateUrl: './src/dashboard/userDetails.html',
        link: function (scope, elem, attr) {
            var currentRoles = attr.permissions.split(',');
            currentRoles.map(function (item) {
                scope['user' + item + 'Active'] = true;
            });
        },
        controller: function ($scope) {
            $scope.storeDetails = function () {
                $window.localStorage.setItem('user1Details', $scope.user1Details);
            };

            $scope.retrieveDetails = $window.localStorage.getItem('user1Details');
        }
    };
}]);