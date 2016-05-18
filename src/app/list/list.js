'use strict';
/**
* manipulareApp Module
*
* Description
*/
Manipulare.controller('listController', function($scope, $http){
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

            $scope.makeUrl = function(company, application) {
                vm.company = company;
                vm.application = application;
                switch(vm.application) {
                    case "biom":
                        vm.applicationurl = 'biom.nl';
                        break;
                    case "columbo":
                        vm.applicationurl = 'inspectionworld.nl';
                        break;
                    default:
                        vm.applicationurl = 'undefined';
                        break;
                }

                vm.url = vm.application + '_' + vm.company + '.' + vm.applicationurl;
                return vm.url;
            }
            /**
             * [newComp description]
             * @return {[type]} [description]
             */
            $scope.newComp = function() {
                varcompany = window.prompt('Vul een bedrijfsnaam in.');
                vm.application = window.prompt('Vul de applicatie in.');

                vm.inarray = $scope.inArray(vm.company, vm.names);
                if(!vm.inarray && vm.application !== '' && vm.company !== '') {
                    console.log(vm.company);
                    console.log(vm.application);
                    console.log(vm.names);
                    vm.url = $scope.makeUrl(vm.company, vm.application);
                    console.log(vm.url);


                    // vm.newcomp = array(
                    //     vm.company => array (
                    //     'Host' => '172.20.1.90',
                    //     'User' => 'mns',
                    //     'Pass' => 'Welcome110#',
                    //     'DBName' => vm.url
                    //     )
                    // );
                    console.log(vm.newcomp);
                }
            }

            $scope.inArray = function(needle, haystack) {
                for(var i = 0; i < haystack.length; i++) {
                    if(haystack[i] == needle) return true;
                }
                return false;
            }    
});
