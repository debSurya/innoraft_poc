app.controller('dashboardController', ['$scope', 'localStorageGetterSetter', 'userDetailsGetter', '$rootScope', '$location', '$log', function ($scope, localStorageGetterSetter, userDetailsGetter, $rootScope, $location, $log) {
    $scope.missingDetails = false;
    var allUserDetails, currentUserDetails,
        dashboardInit = function (details) {
            allUserDetails = details.data;
            currentUserDetails = localStorageGetterSetter.getItem('userIndex');
            $scope.currentUserName = allUserDetails[currentUserDetails].name;
            if (allUserDetails[currentUserDetails].Role === 1) {
                $scope.currentUserPermissions = "1";
            } else if (allUserDetails[currentUserDetails].Role === 2) {
                $scope.currentUserPermissions = "2";
            } else {
                $scope.currentUserPermissions = "2,3";
            }
        },
        dashboardInitFailure = function (err) {
            $scope.missingUserDetails = true;
            $log.error(err);
        };
    if (!$rootScope.loggedIn) {
        $location.url('/login');
        alert("Log in first, else, YOU SHALL NOT PASS!!");
    }
    userDetailsGetter.getUserDetails().then(dashboardInit, dashboardInitFailure);
}]);