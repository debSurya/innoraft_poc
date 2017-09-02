app.controller('dashboardController', ['$scope', '$window', 'userDetailsGetter', '$rootScope', '$location', function ($scope, $window, userDetailsGetter,$rootScope, $location) {
    var allUserDetails, currentUserDetails,
        dashboardInit = function (details) {
            allUserDetails = details.data;
            currentUserDetails = $window.localStorage.getItem('userIndex');
            $scope.currentUserName = allUserDetails[currentUserDetails].name;
            if (allUserDetails[currentUserDetails].Role === 1) {
                $scope.currentUserPermissions = "1";
            } else if (allUserDetails[currentUserDetails].Role === 2) {
                $scope.currentUserPermissions = "2";
            } else {
                $scope.currentUserPermissions = "2,3";
            }
        };
    if (!$rootScope.loggedIn) {
        $location.url('/login');
        alert("Log in first, else, YOU SHALL NOT PASS!!");
    }
    userDetailsGetter.getUserDetails().then(dashboardInit);
}]);