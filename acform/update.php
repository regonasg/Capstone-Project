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
	print_r($id);
	$name = $request->name;
	$degree = $request->degree;
	$minor = $request->minor;
	$pgpa = $request->pgpa;
	$credits = $request->credits;
	$clubs = $request->clubs;
	$supports = $request->supports;
	//Update
	$sql = "UPDATE `acform` SET  `name` = '$name',`degree` = '$degree',`minor` = '$minor',`pgpa` = '$pgpa',`credits` = '$credits',`clubs` = '$clubs', `supports` = '$supports' WHERE `id` = '{$id}' AND `uid` = $user_id LIMIT 1";

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