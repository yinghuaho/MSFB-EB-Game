<?php
try{
	$db = new PDO("mysql:dbname=MSFB;host=localhost", "MSFBadmin", "msfbadmin");
} catch (PDOExceptioin $e){
	echo 'Connection Failed: ' . $e->getMessage();	
}
?>