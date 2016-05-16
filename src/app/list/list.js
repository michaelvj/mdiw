'use strict';
/**
* manipulareApp Module
*
* Description
*/
angular.module('manipulareApp', [])

    .controller('listController', function($scope, $http){
            var vm = this;
        angular.element(document).ready(function (){
            vm.isDisabled = true;
            var request = $http({
                dataType: "json",
                method: "post",
                url: "/app/list/list_ajax.php",
                headers: { 'Content-Type': 'application/x-www-form-urlencoded'}
            });

            request.success(function(data) {
                vm.companies =[];
                vm.names = [];
                $.each(data, function(key, element) {
                    vm.companies.push({'name' : key, 'values' : element});
                    vm.names.push(key);
                });
                console.log(vm.companies);
                console.log(vm.names);

            });

            $scope.enableEdit = function(id) {
                if(vm.isDisabled) {
                    $('#' + id + ' input').attr('disabled', false);
                    console.log(id);
                    vm.isDisabled = false;
                } else {
                    $('#' + id + ' input').attr('disabled', true);
                    vm.isDisabled = true;
                }
            }
            $scope.newComp = function() {
                var company = window.prompt('Vul een bedrijfsnaam in.');

                if(company !== "") {
                    console.log(company);
                }
            }


        });
    });
