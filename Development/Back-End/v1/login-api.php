<?php
error_reporting(E_ALL);
ini_set("display_errors",1);
require '../vendor/autoload.php';
use \Firebase\JWT\JWT;
include_once("../config/database.php");
include_once("../classes/Users.php");
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");



$db = new Database();
$conn = $db->connect();
$user_obj = new Users($conn);

if($_SERVER['REQUEST_METHOD'] === "POST"){
		$data = json_decode(file_get_contents("php://input"));

	if(!empty($data->email) && !empty($data->password))
	{
//$user_obj->password = $data->password;
		$user_obj->email = $data->email;

		$user_data = $user_obj->check_login();
		if(!empty($user_data)){


			$name = $user_data['student'];
				$email = $user_data['email'];
					$password = $user_data['password'];
					if(password_verify($data->password, $password)){
						$iss = "localhost";
						$iat = time();
						$nbf = $iat + 10;
						$exp = $iat + 30;
						$aud ="myusers";
						$user_arr_data = array(
						"id" => $user_data['id'],
						"student" => $user_data['student'],
						"email" => $user_data['email']
						);

						$secret_key = "owt125";
							$payload_info = array(
							"iss"=>$iss,
							"iat"=>$iat,

"nbf"=>$nbf,
"exp"=>$exp,
"aud"=>$aud,
"data"=>$user_arr_data



							);

							$jwt = JWT::encode($payload_info, $secret_key,'HS512');



						http_response_code(200);
	echo json_encode(array(
		"status"=>1,
		"jwt"=>$jwt,
		"message"=> "User Login successfully"));

					}
					else{
							http_response_code(404);
	echo json_encode(array(
		"status"=>0,
		"message"=> "invalid credentials"));
					}
		}
		else{
			http_response_code(404);
	echo json_encode(array(
		"status"=>0,
		"message"=> "invalid credentials"));
		}
	}
	else{
		http_response_code(404);
	echo json_encode(array(
		"status"=>0,
		"message"=> "all data needed"));
	}
}




?>
