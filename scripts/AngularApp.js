var MessageApp = angular.module("MessageApp", ["ngRoute",'luegg.directives']);

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
        ).when(
            "/items", //the name for the route
            {
                templateUrl : "view/items.html"
            }
        );
    }
])
.run(function(){
	console.log("run");
})

 .controller('messageCtrl', ['$scope', '$rootScope','$window', '$location', '$http', '$httpParamSerializerJQLike',  messageCtrl]);


function messageCtrl($scope, $rootScope, $window, $location, $http, $httpParamSerializerJQLike) {

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
        // $scope.messages =
        // {
        // 	0:{message:"hi"},
        // 	1:{message:"hi"},
        // 	2:{message:"hi"},
        // 	3:{message:"hi"},
        // 	4:{message:"hi"}
        // }

        console.log( $scope.messages);

        $scope.user = 
        {
        	message : '',
        	method: 'insert',
        	userid: localStorage.getItem("id")
        }

        $scope.sendMessage = function(){
        	console.log("clicked");
        	console.log($scope.user);
        	var userMessage = $scope.user;
        	console.log(userMessage);

        	userMessage = $httpParamSerializerJQLike(userMessage);

            var messageSend = $http({
                method: 'POST',
                url: "./controller/message_controller.php",
                data: (userMessage),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });

            messageSend.success(function(response) {
                console.log(response);
                getMessages();
            });
        }


        var getMessages = function(){

        	var dataSend ={
        		method: 'view',
        	};

        	dataSend = $httpParamSerializerJQLike(dataSend);


        	var getMessagesFromDatabase = $http({
                method: 'POST',
                url: "./controller/message_controller.php",
                data: (dataSend),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });

            getMessagesFromDatabase.success(function(response) {
                $scope.messages = response;
                console.log($scope.messages);
            });

        }

        getMessages();
 
    }