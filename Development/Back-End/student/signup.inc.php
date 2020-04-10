
<?php
require 'connect.php';
$postdata = file_get_contents("php://input");
//if (isset($_POST['submit']))
if(isset($postdata) && !empty($postdata))
{
	

	//$username = $_POST['student_id'];
	//$email = $_POST['email'];
	//$password = $_POST['password'];
	//$passwordRepeat = $_POST['password_repeat'];

$request = json_decode($postdata); 

	print_r($postdata);

	//Sanitize
	$email = $request->email;
	$username = $request->student_id;
	$password = $request->password;
	$passwordRepeat = $request->password_repeat;

if (empty($username) || empty($email) || empty($password) || empty($passwordRepeat)) {
	//	header("Location: ../signup.php?error=emptyfields&uid=".$username."&mail=".$email);
		exit();
	}
	else if (!filter_var($email, FILTER_VALIDATE_EMAIL) && !preg_match("/^[a-zA-Z0-9]*$/", $username)){
	//	header("Location: ../signup.php?error=invalidmailuid");
		exit();
	}
	else if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
	//	header("Location: ../signup.php?error=invalidmail&uid=".$username);
		exit();
	}
	else if (!preg_match("/^[a-zA-Z0-9]*$/", $username)) {
	//	header("Location: ../signup.php?error=invalidmailuid&mail=".$email);
		exit();
	}
	else if($password !== $passwordRepeat){
	//	header("Location: ../signup.php?error=passwordcheck&uid=".$username."&mail=".$email);
		exit();
	}
	else {
		$sql ="SELECT suidUsers FROM student WHERE suidUsers=?";
		$stmt = mysqli_stmt_init($con);
		if(!mysqli_stmt_prepare($stmt, $sql)) {
			//header("Location: ../signup.php?error=sqlerror");
			exit();
		}
		else{
			mysqli_stmt_bind_param($stmt,"s",$username);
			mysqli_stmt_execute($stmt);
			mysqli_stmt_store_result($stmt);
			$resultCheck = mysqli_stmt_num_rows($stmt);
			if ($resultCheck > 0){
				//header("Location: ../signup.php?error=usertaken&mail=".$email);
				exit();
			}

		

		else{
			$sql ="INSERT INTO student (suidUsers, emailUsers,pwdUsers) Values (?,?,?)";
			$stmt = mysqli_stmt_init($con);
		if(!mysqli_stmt_prepare($stmt, $sql)) {
			//header("Location: ../signup.php?error=sqlerror");
			exit();
		}else{
			$hashedPwd = password_hash($password,PASSWORD_DEFAULT);
			mysqli_stmt_bind_param($stmt,"sss", $username, $email,$hashedPwd);
			mysqli_stmt_execute($stmt);
			//header("Location: ../signup.php?signup=success");
			exit();
			
		}

		}

	}
}
}