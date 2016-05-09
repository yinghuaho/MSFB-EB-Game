<?php
include('connection.php'); 
 
function select_message(){
   global $db;
  $query = "
  SELECT users.username, message.message, message.time
  FROM message
  LEFT JOIN users
  ON message.userid = users.id
";
  $result = $db->query($query);
  echo json_encode($result->fetchAll());
}
  
function insert_message(){
    global $db;
    $query = "INSERT INTO message (userid, message) VALUES ('".$_POST['userid']."', '".$_POST['message']."')";
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