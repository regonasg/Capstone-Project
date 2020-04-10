<?php
require "../vendor/autoload.php";
use \Firebase\JWT\JWT;
require 'connect.php';
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$postdata = file_get_contents("php://input");
//if (isset($_POST['submit']))
if(isset($postdata) && !empty($postdata))
{


	$request = json_decode($postdata); 

	print_r($postdata);

	//$mailuid = $_POST['student_id'];
	//$password = $_POST['password'];
	$mailuid = $request->student_id;
	$password = $request->password;
	//$id = $request->id;
	//$email = $request->email;
	if(empty($mailuid) || empty ($password)) {
	//header("Location: ../index.php?error=emptyfields");
	exit();
	}

	else{
		//$sql ="SELECT * FROM student WHERE suidUsers=? OR emailUsers=?;";
		$sql ="SELECT * FROM student WHERE suidUsers=?";
		$stmt = mysqli_stmt_init($con);
		if(!mysqli_stmt_prepare($stmt, $sql)) {
			//header("Location: ../index.php?error=sqlerror");
			exit();
	}
		else{
		mysqli_stmt_bind_param($stmt, "s", $mailuid);
		mysqli_stmt_execute($stmt);
		$result = mysqli_stmt_get_result($stmt);
		if ($row = mysqli_fetch_assoc($result)){
			 $email = $row['emailUsers'];
			  $id = $row['id'];
			$pwdCheck = password_verify($password, $row['pwdUsers']);
			if($pwdCheck == false){
			//	header("Location: ../index.php?error=wrongpwd");
				echo json_encode('Wrong Password');
				exit();
			}
			else if($pwdCheck == true){
				 $secret_key = "owt125";
        $issuer_claim = "THE_ISSUER"; // this can be the servername
        $audience_claim = "THE_AUDIENCE";
        $issuedat_claim = time(); // issued at
        $notbefore_claim = $issuedat_claim + 5; //not before in seconds
        $expire_claim = $issuedat_claim + 18000; // expire time in seconds
        $token = array(
            "iss" => $issuer_claim,
            "aud" => $audience_claim,
            "iat" => $issuedat_claim,
            "nbf" => $notbefore_claim,
            "exp" => $expire_claim,
            "data" => array(
                "id" => $id,
                "student_id" => $mailuid,
                
                "email" => $email
        ));

        http_response_code(200);

        $jwt = JWT::encode($token, $secret_key);
        echo json_encode(
            array(
                "message" => "Successful login.",
                "jwt" => $jwt,
                "email" => $email,
                "expireAt" => $expire_claim
            ));
				echo json_encode('ok');
			

			}
		}
			else{
			//	header("Location: ../index.php?error=nouser");
				exit();
			}

		

	}
}
}
else{
	header("Location: ../index.php");
	exit();
}
