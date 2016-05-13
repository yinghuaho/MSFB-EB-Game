var MessageApp = angular.module("MessageApp", ["ngRoute",'luegg.directives', 'toastr']);

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
                templateUrl : "view/items.html",
                controller: 'itemsCtrl'
            }
        );
    }
])
.run(function(){
	console.log("run");
})

 .controller('messageCtrl', ['$scope', '$rootScope','$window', '$location', '$http', '$httpParamSerializerJQLike',  messageCtrl])
 .controller('itemsCtrl', ['$scope', '$rootScope','$window', '$location', '$http', 'toastr','$httpParamSerializerJQLike',  itemsCtrl]);


function messageCtrl($scope, $rootScope, $window, $location, $http,$httpParamSerializerJQLike) {

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

function itemsCtrl($scope, $rootScope, $window, $location, $http, toastr,$httpParamSerializerJQLike) {

        console.log("items page");

         $scope.itemsSend = 
        {
            title : '',
            url: '',
            description: '',
            method: 'insert',
            userid: localStorage.getItem("id")
        }


        $scope.pushNewItems = function(){

            if($scope.itemsSend.title == ""){
                toastr.error('Title is required');
                return false;
            }else if($scope.itemsSend.url == ""){
                toastr.error('Url is required');
                return false;
            }else if($scope.itemsSend.description == "")
            {
                toastr.error('Description is required');
                return false;
            }

            var userItem = $scope.itemsSend;

            userItem = $httpParamSerializerJQLike(userItem);

            var itemSend = $http({
                method: 'POST',
                url: "./controller/item_controller.php",
                data: (userItem),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });

            itemSend.success(function(response) {
                console.log(response);
                toastr.success('New Post Created');
                getItems();
            });
        }

        var getItems = function(){
            console.log("items page");

            var dataSend ={
                method: 'view',
            };

            dataSend = $httpParamSerializerJQLike(dataSend);


            var getItemsFromDatabase = $http({
                method: 'POST',
                url: "./controller/item_controller.php",
                data: (dataSend),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });

            getItemsFromDatabase.success(function(response) {
                $scope.items = response.reverse();
                console.log($scope.items);
            });

        }

        getItems();

}

