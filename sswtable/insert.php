<?php
require 'connect.php';
include_once '../config/database.php';
require "../vendor/autoload.php";
use \Firebase\JWT\JWT;

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
$db = new Database();
$connection = $db->connect();





$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
	

	
	
		
		//try{

$request = json_decode($postdata); 
		print_r($request->id);	
		$headers = getallheaders();
		$jwt = $headers["Authorization"];
		$secret_key = "owt125";

		$decoded_data = JWT::decode($jwt, $secret_key, array('HS256'));
$user_id = $decoded_data->data->id; // jwt has a key called data(which has id) from payload info


	//Sanitize
	$id = $request->id;
	$courseItem = $request->courseItem;
	$dueDate = $request->dueDate;
	$dueIn = $request->dueIn;
	$totalGrade = $request->totalGrade;
	$receivedGrade = $request->receivedGrade;
	$notes = $request->notes;

	//Store
	$sql = "INSERT INTO `sswform` (
		
		`courseItem`,
		`uid`,
		`id`,
		`dueDate`,
		`dueIn`,
		`totalGrade`,
		`receivedGrade`,
		`notes`
	) VALUES
	(
		'{$courseItem}',
		'{$user_id}',
		'{$id}',
		'{$dueDate}',
		'{$dueIn}',
		'{$totalGrade}',
		'{$receivedGrade}',
		'{$notes}')
		";
		if(mysqli_query($con,$sql))
		{
			http_response_code(201);

		}
		else
		{
			http_response_code(422);
		}
	//}
	//catch(Exception $ex){
//		http_response_code(500);
//	echo json_encode(array(
//		"status"=>0,
//		"message"=> $ex->getMessage(),
		
//	));
//	}
}
	?>