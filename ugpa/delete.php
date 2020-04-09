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


$id=$_GET['id'];
$headers = getallheaders();
		$jwt = $headers["Authorization"];
		$secret_key = "owt125";

		$decoded_data = JWT::decode($jwt, $secret_key, array('HS256'));
$user_id = $decoded_data->data->id; // jwt has a key called data(which has id) from payload info


$sql = "DELETE FROM ugpa WHERE `id` = {$id} AND `uid` = $user_id ";
print_r($sql);

$result = mysqli_query($con,$sql);
print_r($result);

if(mysqli_query($con, $sql))
{
	http_response_code(204);
}
else
{
	return http_response_code(422);
}



?>