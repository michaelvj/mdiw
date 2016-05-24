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

            $scope.makeUrl = function(company, field) {
                var company = company;
                var application = "Columbo";
                var applicationurl = "inspectionworld.nl";

                switch(field){
                    case 'dbname':
                        var fieldrequest = application + '_' + company + '.' + applicationurl;
                        break;
                    case 'jsconfig':
                        var fieldrequest = {'JSConfig': {
                            'oDataServiceHost': 'http://' + company + applicationurl + '/columboWS/columboGBSWS.svc/',
                            'PDFURL': 'http://' + company + applicationurl + '/columboWS/reportViewer.aspx/',
                            'ImagesURL': 'http://' + company + applicationurl + '/columboWS/retrieveimage.aspx/',
                            'ColumboAppURL': 'http://' + company + applicationurl + '/columboApp'
                        }};
}
                
                return fieldrequest;
            }
            /**
             * [newComp description]
             * @return {[type]} [description]
             */
            $scope.newComp = function() {
                vm.company = window.prompt('Vul een bedrijfsnaam in.');

                console.log(vm.applicationprompt);
                vm.inarray = $scope.inArray(vm.company, vm.names);
                if(!vm.inarray && vm.company !== '' && vm.company !== null) {

                    vm.url = $scope.makeUrl(vm.company.toLowerCase(), 'dbname');
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

                var meme = $scope.makeUrl(compid, 'jsconfig');

                console.log(meme.JSConfig);


                

                    $.each(editedcomp, function(key, value) {
                        if(!(value.name in meme.JSConfig)){
                            memedeux[value.name] = value.value;
                        }
                    }); 
                if(editedcomp[editedcomp.length - 1].name === "ColumboAppURL"){
                    memedeux.JSConfig = meme.JSConfig;
                }

                console.log(memedeux);
                console.log(vm.companies[indexid].values);


                //  call function with ajax call to php with the updated array to replace companies.php content
            }

            $scope.getJSConfig = function(array) {

            }

            $scope.getPDFTemplates = function(string) {
                var PDFTemplates = {"Trap": {}, "BIOM"}
            }
});
