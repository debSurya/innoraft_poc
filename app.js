var app = angular.module('innoApp', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider.when('/', {
        redirectTo: '/login'
    }).when('/login', {
        templateUrl: './src/login/login.html',
        controller: 'credentialController'
    }).when('/dashboard', {
        templateUrl: './src/dashboard/dashboard.html',
        controller: 'dashboardController'
    }).otherwise({
        redirectTo: '/login'
    });
}]);

app.run(['$location', '$window', '$rootScope', function ($location, $window, $rootScope) {
    $location.url('/');
    $rootScope.loggedIn = false;
}]);