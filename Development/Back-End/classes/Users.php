<?php


class Users{
	public $student;
	public $email;
	public $password;
	public $user_id;
	public $project_name;
	public $description;
	public $status;


	private $conn;
	private $users_tbl;
	private $projects_tbl;

	public function __construct($db){
		$this->conn = $db;
		$this->users_tbl = "student";
		$this->projects_tbl = "tbl_projects";
	}
	public function create_user(){
		$user_query = "INSERT INTO" .$this->users_tbl."SET  emailUsers=?, pwdUsers = ?, suidUsers=?";
		$user_obj = $this->conn->prepare($user_query);
		$user_obj->bind_param("sss",$this->email,$this->password, $this->student);

		if($user_obj->execute()){
			return true;
		}
		return false;
	}
	public function check_email(){
		$email_query="SELECT * from ".$this->users_tbl."WHERE emailUsers=?";
		$usr_obj=$this->conn->prepare($email_query);
$usr_obj->bind_param("s", $this->email);
if($usr_obj->execute()){
	$data= $usr_obj->get_result();
	return $data->fetch_assoc();
	}
	return array();
}

public function check_login(){
	$email_query="SELECT * from ".$this->users_tbl."WHERE emailUsers=? LIMIT 0,1";
		$usr_obj=$this->conn->prepare($email_query);
		
$usr_obj->bindParam("s", $this->email);
if($usr_obj->execute()){

	$data= $usr_obj->get_result();

	return $data->fetch_assoc();
	}
	return array();
		
}
public function create_project(){
	$project_query="INSERT into ".$this->projects_tbl."SET user_id=?,student_id=?,description=?,status=?";
$project_obj=$this->conn->prepare(project_query);
$project_student_id = htmlspecialchars(strips_tags($this->project_student_id));
$description = htmlspecialchars(strips_tags($this->description));
$status = htmlspecialchars(strips_tags($this->status));
$project_obj->bind_param("isss", $this->user_id, $project_student_id, $description, $status);
if($project_obj->execute()){
return true;
	}
	return false;

}
//list all projects
public function get_all_projects(){
$project_query = "SELECT * from ".$this->projects_tbl." ORDER BY id DESC";
$project_obj = $this->conn->prepare($project_query);
$project_obj->execute();
return $project_obj->get_result();
}

public function get_user_all_projects(){
$project_query = "SELECT * from ".$this->projects_tbl." WHERE user_id = ? ORDER BY id DESC";
$project_obj = $this->conn->prepare($project_query);

$projects_obj->bind_param("i", $this->user_id);// the user id is from the defined at the top
$project_obj->execute();
return $project_obj->get_result();
}




}

?>