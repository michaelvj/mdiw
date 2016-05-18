'use strict';
/**
* manipulareApp Module
*
* Description
*/

Manipulare.controller('queryController', function($scope, $http) {
        var query = this;

        $scope.querySubmit = function() {
            var input = document.getElementById('query').value;
            var jsoninput = { 'query': input };
            console.log(document.getElementById('query').value);

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
                url: "/app/querying/query-ajax.php",
                method: "POST",
                contentType: 'json',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                data: {
                    query: document.getElementById('query').value
                },
            }).
            success(function(data){
                console.log(data);

            }).
            error(function(data) {
                console.log("memes");
            });
        };
    });