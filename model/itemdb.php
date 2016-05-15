<?php
include('connection.php'); 
 
function select_item(){
   global $db;
   $query = "SELECT * FROM items";
   $result = $db->query($query);
   echo json_encode($result->fetchAll());
}

function select_items_me(){
   global $db;
   $query = "SELECT * FROM items WHERE userid = '".$_POST['userid']."'";
   // $result = $db->query($query);
   $result = $db->prepare($query);
   $result -> execute();
   if($result->errorCode() == 0){
    echo json_encode($result->fetchAll());
   }else{
    echo "something wrong";
   }
}
  
function insert_item(){
    global $db;
    $query = "INSERT INTO items (title, url,description, userid) VALUES ('".$_POST['title']."', '".$_POST['url']."', '".$_POST['description']."', '".$_POST['userid']."')";
    $result = $db->query($query);
    echo json_encode($result->fetchAll());
}

function update_item(){
  var_dump($_POST);
   global $db;
   $query = "UPDATE items SET title = '".$_POST['title']."', url = '".$_POST['url']."',description = '".$_POST['description']."' WHERE id = '".$_POST['id']."' ";
   $result = $db->query($query);
}

function delete_item(){
   global $db;
   $query = "DELETE FROM items WHERE id = '".$_POST['id']."' ";
   $result = $db->query($query);
    
}

?>