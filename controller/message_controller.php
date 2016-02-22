<?php
include("../model/messagedb.php");

if($_POST['method'] == "insert"){
    insert_message();
}

if($_POST['method'] == "view"){
   select_message();
}

if($_POST['method'] == "update"){
    update_message();
}

if($_POST['method'] == "delete"){
    delete_message();
}
?>