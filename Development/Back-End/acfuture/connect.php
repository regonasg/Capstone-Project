<?php 

	// connect to the database
	$con = mysqli_connect('localhost', 'jed', 'kells619', 'ense');

	// check connection
	if(!$con){
		echo 'Connection error: '. mysqli_connect_error();
	}

?>