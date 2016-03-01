<?php
include('connection.php'); 
 
function select_user(){
   global $db;
    $query = "SELECT * FROM users";
   $result = $db->query($query);
}
  
function insert_user(){
    global $db;
    
    $query = "INSERT INTO users (username, password, firstname, lastname, email, usertype) VALUES ('".$_POST['username']."', '".$_POST['password']."', '".$_POST['firstname']."', '".$_POST['lastname']."', '".$_POST['email']."', '".$_POST['usertype']."')";
    $result = $db->query($query);
}

function login_user(){
  global $db;

  $query = "SELECT id, username, password, firstname, lastname, email FROM users WHERE username = '".$_POST['username']."' AND password = '".$_POST['password']."'";
  $result = $db->query($query);

  echo json_encode($result->fetchAll());
}

function update_user(){
  global $db;

  $query = "UPDATE users SET password = '".$_POST['password']."', firstname = '".$_POST['firstname']."', lastname = '".$_POST['lastname']."', email = '".$_POST['email']."' WHERE id = ".$_POST['id']." ";
  $result = $db->query($query);

  $query = "SELECT * FROM users WHERE id = ".$_POST['id']."";
  $result = $db->query($query);

  echo json_encode($result->fetchAll());
}

function delete_user(){
   global $db;
   $query = "DELETE FROM users WHERE id = '".$_POST['id']."' ";
   $result = $db->query($query);
}

?>