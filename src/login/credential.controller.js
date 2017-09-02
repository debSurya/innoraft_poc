app.controller('credentialController', ['$scope', 'credentialGetterService', '$location', 'localStorageGetterSetter', '$rootScope', '$log', function ($scope, credentialGetterService, $location, localStorageGetterSetter, $rootScope, $log) {
    $rootScope.loggedIn = false;
    var validCredentials, correctCredentials = false,
        userIndex = '';
    credentialGetterService.getCredentials().then(function (credentials) {
            validCredentials = credentials.data;
        },
        function (err) {
            $log.error(err);
        });

    $scope.validateCredentials = function () {
        for (var key in validCredentials) {
            if (validCredentials.hasOwnProperty(key)) {
                if (validCredentials['' + key + ''].name === $scope.userName && validCredentials['' + key + ''].password === $scope.userPassword) {
                    correctCredentials = true;
                    userIndex = key;
                    break;
                }
            }
        }
        if (!correctCredentials) {
            $scope.invalidCredentials = true;
            $scope.userName = $scope.userPassword = "";
        } else {
            $scope.invalidCredentials = false;
            localStorageGetterSetter.setItem('userIndex', key);
            $rootScope.loggedIn = true;
            $location.url('/dashboard');
        }
    };
}]);