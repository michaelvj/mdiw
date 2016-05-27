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
                var company = window.prompt('Vul een bedrijfsnaam in.');

                console.log(vm.applicationprompt);
                var inarray = $scope.inArray(company, vm.names);
                if(!inarray && company !== '' && company !== null) {

                    
                    // console.log(vm.url);
                    vm.companylist = vm.companies;
                    var newcomp = $scope.baseConfig(company);
                    vm.companies.push({'name' : company.toLowerCase(), 'values' : newcomp});
                    vm.names.push(company);
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

            $scope.baseConfig = function (company) {
                var url = $scope.makeUrl(company.toLowerCase(), 'dbname');
                var newcomp =
                    {
                        'Host': '172.20.1.90',
                        'User': 'mns',
                        'Pass': 'Welcome110#',
                        'DBName': vm.url
                    };

                return newcomp;
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
                var storedPDFTemplates = $scope.getPDFTemplates();
                var updatecompany = {};
                var PDFTemplates = {};
                var tindexid = vm.names.indexOf(compid);
                var config = $scope.makeUrl(compid, 'jsconfig');
            
                var baseconfig = $scope.baseConfig(compid);
                $.each(editedcomp, function(key, value) {
                    if(!(value.name in config.JSConfig) && !(value.name in storedPDFTemplates[0].PDFTemplates)){
                        if(value.value === ""){
                            updatecompany[value.name] = baseconfig[value.name]

                        } else { 
                            updatecompany[value.name] = value.value;
                        }
                    } else if((value.name in storedPDFTemplates[0].PDFTemplates)) {
                        if(storedPDFTemplates[0].PDFTemplates.hasOwnProperty(value.name)) {
                            var PDFTemplate = storedPDFTemplates[0].PDFTemplates[value.name];
                            PDFTemplates[value.name] = PDFTemplate;
                        }
                        console.log(PDFTemplates);
                    }
                }); 
                    
                if(editedcomp.length > 7){
                    updatecompany.JSConfig = config.JSConfig;
                    if(!$.isEmptyObject(PDFTemplates)) {
                        updatecompany.JSConfig.PDFTemplates = PDFTemplates;
                    }
                }
                
                console.log(config.JSConfig);
                console.log(editedcomp.length);
                console.log(editedcomp);   
                console.log(storedPDFTemplates);
                console.log(updatecompany);
                console.log(vm.companies[tindexid].values);


                //  call function with ajax call to php with the updated array to replace companies.php content
            }

            // $scope.getJSConfig = function(compid) {
            //     var config = $scope.makeUrl(compid, 'jsconfig');
            //     var PDFTemplates = $scope.getPDFTemplates();
            //     var JSConfig = [];

            //     config.JSConfig.PDFTemplates = PDFTemplates[0].PDFTemplates;
            //     console.log(config);
            // }

            $scope.getPDFTemplates = function() {
                var PDFTemplates =  [{'PDFTemplates' :
                                {'NeN3140': {0: 'Template1', 1: 'Template2'},
                                'BIOM': {0: 'Template1', 1: 'Template2'},
                                'Trap': {0:'Insprapport'}, 
                                'Fire': {0: 'Insprapport'},
                                'Demo': {0: 'Insprapport'},
                                'Tilbanden': {0: 'Insprapport'}}
                            }];

                return PDFTemplates;
            }
});
