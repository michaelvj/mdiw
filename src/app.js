/**
* manipulareApp Module
*
* Description
*/
/**
* manipulareApp Module
*
* Description
*/
angular.module('manipulareApp', ['ui-router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider

        .state('index', {
            url: '/index',
            templateUrl: 'index.html'
        })

        .state('querying', {
            url: '/querying',
            templateUrl: 'index.html'
        })

        .state('complist', {
            url: '/complist'
        })
    })