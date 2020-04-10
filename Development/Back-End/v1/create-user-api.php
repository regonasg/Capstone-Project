<?php

ini_set("display_errors",1);
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: POST");
//header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method,Access-Control-Request-Headers, Authorization");
header('Content-Type: application/json');


include_once("../config/database.php");
include_once("../classes/Users.php");


$db = new Database();
$connection = $db->connect();
//$connection = mysqli_connect('localhost', 'jed', 'kells619', 'ense');

$user_obj = new Users($connection);

if($_SERVER['REQUEST_METHOD'] === "POST"){

	$data = json_decode(file_get_contents("php://input"));

	//if(!empty($data->suidUsers_id) && !empty($data->email) &&!empty($data->password) )
	if(isset($data) && !empty($data))
	{
		$user_obj->student = $data->student;
		$user_obj->email = $data->email;
		$user_obj->password = password_hash($data->password, password_DEFAULT);
		
		$email_data = $user_obj->check_email();
		if(!empty(email_data)){
			http_response_code(500);
			echo json_encode(array(
						"status"=>0,
						"message"=>"email already exists"
			));
		}
		else{
			if($user_obj->create_user()){
			http_response_code(200);
		echo json_encode(array(
		"status"=>1,
		"message"=> "user created"));
		}
		else{
			http_response_code(500);
	echo json_encode(array(
		"status"=>0,
		"message"=> "failed to save user"));
		}
		}
		
	}
	//else{
	//	http_response_code(500);
	//echo json_encode(array(
//		"status"=>0,
//		"message"=> "All data needed"));
//	}

}

else{


	http_response_code(503);
	echo json_encode(array(
		"status"=>0,
		"message"=> "Access Denied"));
}

?>