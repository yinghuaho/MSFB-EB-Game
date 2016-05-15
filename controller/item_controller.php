<?php
include("../model/itemdb.php");

if($_POST['method'] == "insert"){
    insert_item();
}

if($_POST['method'] == "view"){
   select_item();
}

if($_POST['method'] == "view_me"){
   select_items_me();
}


if($_POST['method'] == "update"){
    update_item();
}

if($_POST['method'] == "delete"){
    delete_item();
}
?>