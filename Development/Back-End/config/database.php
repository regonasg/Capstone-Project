<?php

class Database{

	private $hostname;
	private $dbname;
	private $username;
	private $password;
	private $conn;


	public function connect(){

		// variable init
		$this->hostname = "localhost";
		$this->dbname = "ense";
		$this->username = "jed";
		$this->password = "kells619";

		//$this->conn = new mysqli($this->hostname,$this->username,$this->password,$this->dbname);

		$this->conn= mysqli_connect('localhost', 'jed', 'kells619', 'ense');
		if($this->conn->connect_errno){
			print_r($this->conn->connect_error);
			exit;
		}
		else{
			return $this->conn;
		}
	}
}
//$db = new Database();
//$db->connect();

?>