'use strict';

// Declare app level module which depends on views, and components
angular.module('formApp', [
    'ngRoute',
    'server.utils',

    'form.Fields',
    'formApp.results'
])
.config(['$locationProvider', '$routeProvider' , function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('');

    $routeProvider.when('/form', {
        templateUrl: 'templates/form.html',
        controller: 'fields',
        controllerAs: 'ctrl'
    }).when('/results', {
        templateUrl: 'templates/results.html',
        controller: 'results',
        controllerAs: 'ctrl'
    }).when('/admin', {
        templateUrl: 'templates/admin.html',
        controller: 'fields',
        controllerAs: 'ctrl'
    }).otherwise({redirectTo: '/form'});
}]);
