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
	$tcreditHours = $request->tcreditHours;
	$tcourseNum = $request->tcourseNum;
	$tcourseName = $request->tcourseName;
	$tyearTaken = $request->tyearTaken;
	$tsemTaken = $request->tsemTaken;
	$tcreditsEarned = $request->tcreditsEarned;
	$tcourseReq = $request->tcourseReq;
	$tmajorReq = $request->tmajorReq;
	$tgrade = $request->tgrade;

	//Store
	$sql = "INSERT INTO `accurrent` (
		
		
		`uid`,
		`id`,
		`tcreditHours`,
		`tcourseNum`,
		`tcourseName`,
		`tyearTaken`,
		`tsemTaken`,
		`tcreditsEarned`,
		`tcourseReq`,
		`tmajorReq`,
		`tgrade`
	) VALUES
	(
		
		'{$user_id}',
		'{$id}',
		'{$tcreditHours}',
		'{$tcourseNum}',
		'{$tcourseName}',
		'{$tyearTaken}',
		'{$tsemTaken}',
		'{$tcreditsEarned}',
		'{$tcourseReq}',
		'{$tmajorReq}',
		'{$tgrade}')
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