'use strict';

function LoginCtrl($scope, $http, $location, $window) {

    console.log($location.absUrl());
    var url = $location.absUrl();
    var authCode = url.split('code=')[1];
    var serverUrl = url.split('login.html')[0];
    console.log(authCode);
    $http.post('/api/v1/auth', {auth_code:authCode, server_url:serverUrl}).success(function(data, status, headers, config) {
        console.log(data);
        localStorage.id=data.id;
        localStorage.token=data.token;
        $window.location='/raffle';
    });
}