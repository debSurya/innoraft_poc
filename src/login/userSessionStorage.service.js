app.service('userSessionStorageService', ['$window', function ($window) {
    this.storeCurrentUser = function (currentUser) {
        $window.localStorage.setItem('currentUser', currentUser);
    };
}]);