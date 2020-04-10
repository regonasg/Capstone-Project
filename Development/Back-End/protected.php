<?php
include_once 'config/database.php';
require "vendor/autoload.php";
use \Firebase\JWT\JWT;

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


$secret_key = "owt125";
$jwt = null;
$databaseService = new Database();
$conn = $databaseService->connect();

$data = json_decode(file_get_contents("php://input"));


//$authHeader = $_SERVER['HTTP_AUTHORIZATION'];

//$arr = explode(" ", $authHeader);


/*echo json_encode(array(
    "message" => "sd" .$arr[1]
));*/

//$jwt = $arr[0];
$headers = getallheaders();
//var_dump($headers);
$jwt = $headers["Authorization"];
if($jwt){

    try {

        $decoded = JWT::decode($jwt, $secret_key, array('HS256'));

        http_response_code(200);

$user_id = $decoded->data->id;
    echo json_encode(array(
        "status"=>1,
        "message"=> "got JWT Token",
        "user_data"=> $decoded,
        "user_id"=> $user_id
    ));

    }catch (Exception $e){

    http_response_code(401);

    echo json_encode(array(
        "message" => "Access denied.",
        "error" => $e->getMessage()
    ));
}

}
?>