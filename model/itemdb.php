<?php
include('connection.php'); 
 
function select_item(){
   global $db;
   $query = "SELECT * FROM items";
   $result = $db->query($query);
   echo json_encode($result->fetchAll());
}
  
function insert_item(){
    global $db;
    $query = "INSERT INTO items (title, url,description, userid) VALUES ('".$_POST['title']."', '".$_POST['url']."', '".$_POST['description']."', '".$_POST['userid']."')";
    $result = $db->query($query);
    echo json_encode($result->fetchAll());
}

function update_item(){
   global $db;
   $query = "UPDATE items SET title = '".$_POST['title']."',description = '".$_POST['description']."' WHERE userid = '".$_POST['userid']."' ";
   $result = $db->query($query);
}

function delete_item(){
   global $db;
   $query = "DELETE FROM items WHERE id = '".$_POST['userid']."' ";
   $result = $db->query($query);
    
}

?>