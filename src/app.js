'use strict';
/**
* manipulareApp Module
*
* Description
*/

var Manipulare = angular.module('Manipulare', ['ui.router']);
    


Manipulare.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/list');

    $stateProvider
    .state('app', {
        url: '',
        abstract: true,
        templateUrl: 'app.html'
    })
    .state('app.querying', {
        url: '/querying',
        templateUrl: '/app/querying/querying.html',
        controller: 'queryingCtrl',
        controllerAs: 'vm'
    })

    .state('app.compconfig', {
        url: '/compconfig',
        templateUrl: '/app/compconfig/compconfig.html',
        controller: 'compconfigCtrl',
        controllerAs: 'vm'
    })

    .state('app.list', {
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