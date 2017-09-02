app.service('userDetailsGetter', ['$http', function ($http) {
    this.getUserDetails = function () {
        return $http.get('./data/detail.json');
    }
}]);