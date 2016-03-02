<?php
include("../model/userdb.php");

if($_POST['method'] == "insert"){
    insert_user();
}

if($_POST['method'] == "login"){
    login_user();
}

if($_POST['method'] == "view"){
   select_user();
}

if($_POST['method'] == "update"){
    update_user();
}

if($_POST['method'] == "delete"){
    delete_user();
}
?>