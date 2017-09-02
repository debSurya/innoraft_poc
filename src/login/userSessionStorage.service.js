app.service('userSessionStorageService', ['$window', function ($window) {
    this.storeCurrentUser = function (userIndex) {
        $window.localStorage.setItem('userIndex', userIndex);
    };
}]);