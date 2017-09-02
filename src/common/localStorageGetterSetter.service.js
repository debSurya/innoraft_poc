app.service('localStorageGetterSetter', ['$window', function ($window) {
    this.getItem = function (key) {
        return angular.fromJson($window.localStorage.getItem(key))
    };

    this.setItem = function (key, value) {
        $window.localStorage.setItem(key, angular.toJson(value));
    };
}]);