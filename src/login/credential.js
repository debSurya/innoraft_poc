app.controller('credentialController', ['$scope', 'credentialGetterService', '$location', 'userSessionStorageService', function ($scope, credentialGetterService, $location, userSessionStorageService) {
    var validCredentials, correctCredentials = false;
    credentialGetterService.getCredentials().then(function (credentials) {
        validCredentials = credentials.data;
    });

    $scope.validateCredentials = function () {
        for (var key in validCredentials) {
            if (validCredentials.hasOwnProperty(key)) {
                if (validCredentials['' + key + ''].name === $scope.userName && validCredentials['' + key + ''].password === $scope.userPassword) {
                    console.log('valid credentials');
                    correctCredentials = true;
                    break;
                }
            }
        }
        if (!correctCredentials) {
            $scope.invalidCredentials = true;
            $scope.userName = $scope.userPassword = "";
        } else {
            $scope.invalidCredentials = false;
            userSessionStorageService.storeCurrentUser($scope.userName);
            $location.url('/dashboard');
        }
    };
}]);