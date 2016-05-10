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
            templateUrl: 'index.html',
            controller: 'querying'
        })

        .state('compconfig', {
            url: '/app/compconfig',
            templateUrl: '/app/compconfig/compconfig.html',
            controller: 'compconfig'
        })

        .state('list', {
            url: '/list/'
        })
    })