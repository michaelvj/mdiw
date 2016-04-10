'use strict';
/**
* manipulareApp Module
*
* Description
*/
angular.module('manipulareApp', [])

    .controller('listController', function($scope, $http){
            var list = this;
        angular.element(document).ready(function (){

            var request = $http({
                dataType: "json",
                method: "post",
                url: "../manipulare/src/assets/php-ajax/list_ajax.php",
                headers: { 'Content-Type': 'application/x-www-form-urlencoded'}
            });

            request.success(function(data) {
                list.companies =[];
                list.names = [];
                $.each(data, function(key, element) {
                    list.companies.push({'name' : key, 'values' : element});
                    list.names.push(key);
                });
                console.log(list.companies);
                console.log(list.names);

            });

            var saveConfig = function(){

            }

        });
    });
