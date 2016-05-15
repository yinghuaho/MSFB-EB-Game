<?php
try{
	$db = new PDO("mysql:dbname=MSFB;host=localhost", "root", "root");
} catch (PDOExceptioin $e){
	echo 'Connection Failed: ' . $e->getMessage();	
}
?>