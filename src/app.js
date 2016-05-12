'use strict';
/**
* manipulareApp Module
*
* Description
*/

var Manipulare = angular.module('Manipulare', ['ui.router']);
    


Manipulare.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when('/', '/home/app');
    $urlRouterProvider.when('/home', '/home/app');
    $urlRouterProvider.when('/querying', 'home/app/querying');
    $urlRouterProvider.when('/list', 'home/app/list');
    $urlRouterProvider.when('/compconfig', 'home/app/compconfig');

    $stateProvider
    .state('parent', {
        url: '/home',
        abstract: true,
        template: '<ui-view/>'
    })

    .state('parent.app', {
        url: '/app',
        templateUrl: '/app/app.html'
    })

    .state('parent.app.querying', {
        url: '/querying',
        templateUrl: '/app/querying/querying.html',
        controller: 'queryingCtrl',
        controllerAs: 'vm'
    })

    .state('parent.app.compconfig', {
        url: '/compconfig',
        templateUrl: '/app/compconfig/compconfig.html',
        controller: 'compconfigCtrl',
        controllerAs: 'vm'
    })

    .state('parent.app.list', {
        url: '/list',
        templateUrl: '/app/list/list.html',
        controller: 'listCtrl',
        controllerAs: 'vm'
    });
}]);

Manipulare.run(['$rootScope', '$state', '$stateParams', function ($rootScope, $state, $stateParams) {
// Set reference to access them from any scope
$rootScope.$state = $state;
$rootScope.$stateParams = $stateParams;
}
]);