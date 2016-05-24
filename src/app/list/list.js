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
                vm.truelist = data;
                vm.companies =[];
                vm.names = [];
                $.each(data, function(key, element) {
                    vm.companies.push({'name' : key, 'values' : element});
                    vm.names.push(key);
                });
                console.log(data);

            });
        });

            $scope.enableEdit = function(id) {
                if(vm.isDisabled) {
                    $('#' + id + ' input').attr('disabled', false);
                    vm.isDisabled = false;
                } else {
                    $('#' + id + ' input').attr('disabled', true);
                    vm.isDisabled = true;
                }
            }

            $scope.makeUrl = function(company, application) {
                vm.company = company;
                vm.application = application;
                switch(vm.application && vm.company) {
                    case "biom":
                        vm.applicationurl = 'biom.nl';
                        break;
                    case "Columbo":
                        vm.applicationurl = 'inspectionworld.nl';
                        break;
                    default:
                        vm.applicationurl = 'inspectionworld.nl';
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
                vm.company = window.prompt('Vul een bedrijfsnaam in.');
                vm.applicationprompt = window.prompt('Vul de applicatie in.');

                console.log(vm.applicationprompt);
                vm.inarray = $scope.inArray(vm.company, vm.names);
                if(!vm.inarray && vm.application !== '' && vm.company !== '' && vm.company !== null && vm.application !== null) {
                    vm.application = $scope.capitalizeFirstLetter(vm.applicationprompt);
                    // console.log(vm.company);
                    // console.log(vm.application);
                    vm.url = $scope.makeUrl(vm.company.toLowerCase(), vm.application);
                    // console.log(vm.url);
                    vm.companylist = vm.companies;
                    vm.newcomp =
                    {
                        'Host': '172.20.1.90',
                        'User': 'mns',
                        'Pass': 'Welcome110#',
                        'DBName': vm.url
                    };
                    vm.companies.push({'name' : vm.company.toLowerCase(), 'values' : vm.newcomp});
                    vm.names.push(vm.company);
                    // console.log(vm.companies);

                    $scope.mergeNewCompany(vm.companylist);
                }
            }

            $scope.inArray = function(needle, haystack) {
                for(var i = 0; i < haystack.length; i++) {
                    if(haystack[i] == needle) {
                        return true;
                    }
                }
                return false;
            }

            $scope.capitalizeFirstLetter = function(string) {
                return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
            }

            $scope.mergeNewCompany = function(array) {
                var updatedcompanies = {};
                $.each(array, function( key, values) {
                    updatedcompanies[values.name] = values.values;

                });

                console.log(updatedcompanies);
            }

            $scope.updateCompany = function(compid) {
                $scope.enableEdit(compid);
                var editedcomp = $('#' + compid + ' :eq(1) input');
                console.log(editedcomp.length);
                console.log(vm.companies);
                console.log(editedcomp);
                var memedeux = [];

                var indexid = vm.names.indexOf(compid);


                $.each(editedcomp, function(key, value) {
                    memedeux[value.name] = value.value;
                });
                console.log(memedeux);
                console.log(vm.companies[indexid].values);

                //  call function with ajax call to php with the updated array to replace companies.php content
            }
});
