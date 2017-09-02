app.service('userSessionStorageService', ['$window', function ($window) {
    this.storeCurrentUser = function (currentUser, userIndex) {
        $window.localStorage.setItem('currentUser', currentUser);
        $window.localStorage.setItem('userIndex', userIndex);
    };
}]);