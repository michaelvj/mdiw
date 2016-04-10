'use strict';
/**
* manipulareApp Module
*
* Description
*/
angular.module('manipulareApp', [])
    .controller('queryController', function($http, $scope) {


        $scope.querySubmit = function() {
            $scope.data = document.getElementById('query').value;
            console.log($scope.data);

            var request = $http({
                data: $scope.data,
                dataType: "string",
                method: "post",
                url: "../manipulare/src/assets/php-ajax/query-ajax.php"
            })
        }
    });