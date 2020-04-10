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





$headers = getallheaders();
		$jwt = $headers["Authorization"];
		$secret_key = "owt125";

		$decoded_data = JWT::decode($jwt, $secret_key, array('HS256'));


$user_id = $decoded_data->data->id; // jwt has a key called data(which has id) from payload info

$ugpa = [];
$sql = "SELECT * FROM acfuture WHERE `uid` = $user_id ";




$result = mysqli_query($con,$sql);

print_r($result);


	$cr = 0;
	while($row = mysqli_fetch_assoc($result))
	{
		$ugpa[$cr]['id'] = $row['id'];
		//$ugpa[$cr]['uid'] = $row['uid'];
		$ugpa[$cr]['fcreditHours'] = $row['fcreditHours'];
		$ugpa[$cr]['fcourseNum'] = $row['fcourseNum'];
		$ugpa[$cr]['fcourseName'] = $row['fcourseName'];
		$ugpa[$cr]['fyearTaken'] = $row['fyearTaken'];
		$ugpa[$cr]['fsemTaken'] = $row['fsemTaken'];
		$ugpa[$cr]['fcreditsEarned'] = $row['fcreditsEarned'];
		$ugpa[$cr]['fcourseReq'] = $row['fcourseReq'];
		$ugpa[$cr]['fmajorReq'] = $row['fmajorReq'];
		$ugpa[$cr]['fgrade'] = $row['fgrade'];
	
		$cr++;
	}

	

	echo  json_encode($ugpa);







?>