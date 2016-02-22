<?php
include('class_lib.php'); 
 
function select_user(){
   global $db;
    $query = "SELECT * FROM users";
   $result = $db->query($query);
}
  
function insert_user(){
    global $db;
    
    $query = "INSERT INTO users (username, password,firstname,lastname,email,usertype) VALUES ('".$_POST['username']."', '".$_POST['password']."', '".$_POST['firstname']."', '".$_POST['lastname']."', '".$_POST['email']."', '".$_POST['usertype']."')";
    $result = $db->query($query);
}

function update_user(){
   global $db;
   $query = "UPDATE users SET password = '".$_POST['password']."',firstname = '".$_POST['firstname']."',lastname = '".$_POST['lastname']."',email = '".$_POST['email']."',usertype = '".$_POST['usertype']."' WHERE id = '".$_POST['id']."' ";
   $result = $db->query($query);
}

function delete_user(){
   global $db;
   $query = "DELETE FROM users WHERE id = '".$_POST['id']."' ";
   $result = $db->query($query);
    
}

?>