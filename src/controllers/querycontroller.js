'use strict';
/**
* manipulareApp Module
*
* Description
*/
angular.module('manipulareApp', [])
    .controller('queryController', function($scope, $http) {


        $scope.querySubmit = function() {
            var input = document.getElementById('query').value;
            var jsoninput = { 'query': input };
            console.log(jsoninput);

            // $http.post('../manipulare/src/assets/php-ajax/query-ajax.php', input)
            // .success(function(data, status, headers, config)
            // {
            //     console.log(status + ' - ' + data);
            // })
            // .error(function(data, status, headers, config)
            // {
            //     console.log('error');
            // });

            var request = $http({
                dataType: "json",
                method: "POST",
                data: jsoninput,
                url: "../manipulare/src/assets/php-ajax/query-ajax.php"
            }).
            success(function(data){
                var queryresult = data
                console.log(queryresult);
            }).
            error(function(data) {
                console.log("memes");
            });
        };
    });