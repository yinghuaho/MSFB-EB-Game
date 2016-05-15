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
        ).when(
            "/my_items",
            {
                templateUrl: "view/my-items.html",
                controller: 'myItemsCtrl'
            }

        );
    }
])
.run(function(){
	console.log("run");
})

 .controller('messageCtrl', ['$scope', '$rootScope','$window', '$location', '$http', 'toastr','$httpParamSerializerJQLike',  messageCtrl])
 .controller('itemsCtrl', ['$scope', '$rootScope','$window', '$location', '$http', 'toastr','$httpParamSerializerJQLike',  itemsCtrl])
  .controller('myItemsCtrl', ['$scope', '$rootScope','$window', '$location', '$http', 'toastr','$httpParamSerializerJQLike',  myItemsCtrl]);



function messageCtrl($scope, $rootScope, $window, $location, $http, toastr,$httpParamSerializerJQLike) {

        console.log( $scope.messages);
        $scope.messageEdit = false;
        $scope.messageEditButton = "Edit";

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


        $scope.edit = function(id,message){
            if($scope.messageEdit == false)
            {
                $scope.messageEdit = true;
                $scope.messageEditButton = "Done";
            }else{
                $scope.messageEdit = false;
                $scope.messageEditButton = "Edit";
            }

            console.log(id,message);
            var messageSendUpdate ={
                method: 'update',
                id: id,
                message: message

            };

            messageSendUpdate = $httpParamSerializerJQLike(messageSendUpdate);


            var updateMessageFromDatabase = $http({
                method: 'POST',
                url: "./controller/message_controller.php",
                data: (messageSendUpdate),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });

            updateMessageFromDatabase.success(function(response) {
                getMessages();
            });

        }

        $scope.delete = function(id){
            var messageSendDelete ={
                method: 'delete',
                id: id

            };

            messageSendDelete = $httpParamSerializerJQLike(messageSendDelete);


            var deleteMessageFromDatabase = $http({
                method: 'POST',
                url: "./controller/message_controller.php",
                data: (messageSendDelete),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });

            deleteMessageFromDatabase.success(function(response) {
                toastr.success('Delete Successful');
                getMessages();
            });
        }
 
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

function myItemsCtrl($scope, $rootScope, $window, $location, $http, toastr,$httpParamSerializerJQLike) {

    $scope.edit = false;
    $scope.editButtonName = "Edit";

    var getItems = function(){
            console.log("my-items page");

            var dataSend ={
                method: 'view_me',
                userid: localStorage.getItem("id") 

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
                $scope.itemsMe = response.reverse();
                console.log($scope.itemsMe);

            });

        }

        getItems();



    $scope.deleteItems = function(itemID){

            var dataSendDelete ={
                method: 'delete',
                id: itemID

            };

            dataSendDelete = $httpParamSerializerJQLike(dataSendDelete);


            var getItemsFromDatabase = $http({
                method: 'POST',
                url: "./controller/item_controller.php",
                data: (dataSendDelete),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });

            getItemsFromDatabase.success(function(response) {
                toastr.success('Delete Successful');
                getItems();
            });
    }

    $scope.updateItems = function(itemID,itemUrl,itemTitle,itemDescription){
        console.log("update");
        console.log(itemID,itemUrl,itemTitle,itemDescription);
        if($scope.edit == false){
            $scope.edit = true;
            $scope.editButtonName = "Update";
        }else
        {
            $scope.edit = false;
        }

            var dataSendUpdate ={
                method: 'update',
                id: itemID,
                url: itemUrl,
                title: itemTitle,
                description: itemDescription

            };

            dataSendUpdate = $httpParamSerializerJQLike(dataSendUpdate);


            var deleteItemsFromDatabase = $http({
                method: 'POST',
                url: "./controller/item_controller.php",
                data: (dataSendUpdate),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });

            deleteItemsFromDatabase.success(function(response) {
                // toastr.success('Update Successful');
                getItems();
            });
    }


}

