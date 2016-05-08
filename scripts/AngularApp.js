var MessageApp = angular.module("MessageApp", ["ngRoute"]);

MessageApp.config([
    "$routeProvider", "$locationProvider", function($routeProvider, $locationProvider){

        $locationProvider.html5Mode(true);

        $routeProvider.when(
            "/profile", //the name for the route
            {
                templateUrl : "view/profile.html"
            }
        ).when(
            "/message", //the name for the route
            {
                templateUrl : "view/message.html",
                controller: 'messageCtrl'
            }
        );
    }
])

 .controller('messageCtrl', ['$scope', '$rootScope','$window', '$location', '$http', '$httpParamSerializerJQLike', messageCtrl]);


function messageCtrl($scope, $rootScope, $window, $location, $http, $httpParamSerializerJQLike, appConfig, authService) {

		console.log("Mesage Page");
        // var main = appConfig.main;

        // $scope.login = function($event, credentials) {
        //     // $location.url('/')
        //     event.preventDefault();
        //     console.log('logging in!');

        //     $http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8'

        //     var userInfo = {
        //         name: credentials.username,
        //         password: credentials.password
        //     };

        //     console.log(userInfo);

        //     userInfo = $httpParamSerializerJQLike(userInfo);

        //     var loginResponse = $http({
        //         method: 'POST',
        //         url: main.orchestraURL + '/authorize',
        //         data: (userInfo),
        //         headers: {
        //             'Content-Type': 'application/x-www-form-urlencoded'
        //         }
        //     });

        //     loginResponse.success(function(response) {
        //         // if(response.match == false){ <--username and password doesn't match any row in our database
        //         //     console.log("username or password is wrong");
        //         // }else if (response.match == true){
        //         //     saveJwtToken(response.token);
        //         //     //role = response.role  <--role checking
        //         //     location.url('/');
        //         // }
        //         console.log(response);
        //         console.log('logging in with token ' + response.token);
        //         saveJwtToken(response.token);
        //         $rootScope.user_role = authService.role(); 
        //         console.log($rootScope.user_role);

        //         $location.url('/');
        //     });

        //     loginResponse.error(function(response){
        //         console.log("Ajax Call Failed");
        //     });
        // }

        // $scope.logout = function($event) {
        //     event.preventDefault();
        //     $window.localStorage.removeItem('jwtToken');
        //     $location.url('page/signin');
        // }

        // $scope.findPassword= function($event) {
        //     event.preventDefault();
        //     var email = $scope.forgetPassword;

        //     var emailResetRespond = $http({
        //         method: 'POST',
        //         url: main.orchestraURL + '/authorize',
        //         data: (email),
        //         headers: {
        //             'Content-Type': 'application/x-www-form-urlencoded'
        //         }
        //     });

        //     emailResetRespond.success(function(response) {
        //         console.log(response);
        //         if(response.find == false)
        //         {
        //             console.log("Email does not exist in the system");
        //         }else if(response.find == true)
        //         {
        //             console.log("checked your email");
        //             $location.url('page/signin');
        //         }
        //     });
 
    }