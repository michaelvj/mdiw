/**
* manipulareApp Module
*
* Description
*/
angular.module('manipulareApp', [])
    .config(['$routeProvider',
        function($routeProvider) {
        $routeProvider.
            when('/compconfig', {
                templateUrl: 'templates/compconfig.html',
                controller: 'listController'
            }).
            when('/querying', {
                templateUrl: 'templates/querying.html',
                controller: 'queryController'
            }).
            otherwise({
                redirectTo: '/index'
            });
    }]);