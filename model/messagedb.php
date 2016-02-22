<?php
include('class_lib.php'); 
 
function select_message(){
   global $db;
    $query = "SELECT * FROM message";
   $result = $db->query($query);
}
  
function insert_message(){
    global $db;
    
    $query = "INSERT INTO message (userid, message ,touserid) VALUES ('".$_POST['userid']."', '".$_POST['message']."', '".$_POST['touserid']."')";
    $result = $db->query($query);
}

function update_message(){
   global $db;
   $query = "UPDATE message SET message = '".$_POST['message']."' WHERE id = '".$_POST['id']."' ";
   $result = $db->query($query);
}

function delete_message(){
   global $db;
   $query = "DELETE FROM message WHERE id = '".$_POST['userid']."' ";
   $result = $db->query($query);
    
}

?>