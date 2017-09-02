app.controller('credentialController', ['$scope', 'credentialGetterService', '$location', 'userSessionStorageService', '$rootScope', function ($scope, credentialGetterService, $location, userSessionStorageService, $rootScope) {
    $rootScope.loggedIn = false;
    var validCredentials, correctCredentials = false, userIndex='';
    credentialGetterService.getCredentials().then(function (credentials) {
        validCredentials = credentials.data;
    });

    $scope.validateCredentials = function () {
        for (var key in validCredentials) {
            if (validCredentials.hasOwnProperty(key)) {
                if (validCredentials['' + key + ''].name === $scope.userName && validCredentials['' + key + ''].password === $scope.userPassword) {
                    console.log('valid credentials');
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
            userSessionStorageService.storeCurrentUser(key);
            $rootScope.loggedIn = true;
            $location.url('/dashboard');
        }
    };
}]);