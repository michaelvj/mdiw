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
            list.isDisabled = true;
            var request = $http({
                dataType: "json",
                method: "post",
                url: "/assets/php-ajax/list_ajax.php",
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

            $scope.enableEdit = function(id) {
                if(list.isDisabled) {
                    $('#' + id + ' :input').attr('disabled', false);
                    console.log(id);
                    list.isDisabled = false;
                } else {
                    $('#' + id + ' :input').attr('disabled', true);
                    list.isDisabled = true;
                }
            }

        });
    });
