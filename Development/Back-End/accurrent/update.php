<?php
require 'connect.php';
include_once '../config/database.php';
require "../vendor/autoload.php";
use \Firebase\JWT\JWT;

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
$db = new Database();
$connection = $db->connect();
//Get the posted data





$postdata = file_get_contents("php://input");
// print_r($postdata);

if(isset($postdata) && !empty($postdata))
{
	// Extract the data.
	$request = json_decode($postdata);

$headers = getallheaders();
		$jwt = $headers["Authorization"];
		$secret_key = "owt125";

		$decoded_data = JWT::decode($jwt, $secret_key, array('HS256'));
$user_id = $decoded_data->data->id; // jwt has a key called data(which has id) from payload info

	// Sanitize
	$id = $_GET['id'];
	
	$tcreditHours = $request->tcreditHours;
	$tcourseNum = $request->tcourseNum;
	$tcourseName = $request->tcourseName;
	$tyearTaken = $request->tyearTaken;
	$tsemTaken = $request->tsemTaken;
	$tcreditsEarned = $request->tcreditsEarned;
	$tcourseReq = $request->tcourseReq;
	$tmajorReq = $request->tmajorReq;
	$tgrade = $request->tgrade;
	//Update
	$sql = "UPDATE `accurrent` SET  `tcourseNum` = '$tcourseNum',`tcreditHours` = '$tcreditHours',`tcourseName` = '$tcourseName',`tyearTaken` = '$tyearTaken',`tsemTaken` = '$tsemTaken',`tcreditsEarned` = '$tcreditsEarned',`tcourseReq` = '$tcourseReq',`tmajorReq` = '$tmajorReq', `tgrade` = '$tgrade' WHERE `id` = '{$id}' AND `uid` = $user_id LIMIT 1";

	if(mysqli_query($con,$sql))
		{
			http_response_code(201);

		}
		else
		{
			http_response_code(422);
		}



}







?>