app.service("credentialGetterService", ['$http', function ($http) {
    this.getCredentials = function () {
        return $http.get('../data/credential.json');
    };
}]);