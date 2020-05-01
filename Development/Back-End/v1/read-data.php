<?php 
ini_set("display_errors",1);
require '../vendor/autoload.php';
use \Firebase\JWT\JWT;

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Content-type: application/json; charset=UTF-8 *");


include_once("../config/database.php");
include_once("../classes/Users.php");

$db = new Database();
$connection = $db->connect();
$user_obj = new Users($connection);

if($_SERVER['REQUEST_METHOD'] === "POST"){


//$data = json_decode(file_get_contents("php://input"));
//get all headers
	$all_headers = getallheaders();

	$data->jwt = $all_headers['Authorization'];

if(!empty($data->jwt)){
	try{
		$secret_key = "owt125";

$decoded_data = JWT::decode($data->jwt, $secret_key, array('HS512'));
http_response_code(200);

$user_id = $decoded_data->data->id;
	echo json_encode(array(
		"status"=>1,
		"message"=> "got JWT Token",
		"user_data"=> $decoded_data,
		"user_id"=> $user_id
	));
	}

	catch(Exception $ex){
		http_response_code(500);
	echo json_encode(array(
		"status"=>0,
		"message"=> $ex->getMessage(),
		
	));
	}



}


}









 ?>