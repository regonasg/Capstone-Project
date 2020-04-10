<?php

/*	
 *	Created by Web Services 09 Dec 2013
 *		-- creates a basic LDAP connection to the U of R Pool 
 *		-- Authentication based on tree 'all.uofr'
 *		-- Construct 
 */	

class ldapUR {
	
	private $conn;

	public function __construct()
		{
		$server='ldaps://ldappool.cc.uregina.ca';
		$port=636;
		
		if ($server == '' || !is_numeric($port)) return false;
		
		$this->conn = ldap_connect($server, $port);
		ldap_set_option($this->conn, LDAP_OPT_PROTOCOL_VERSION, 3);
		ldap_set_option($this->conn, LDAP_OPT_REFERRALS, 0);
		ldap_set_option($this->conn, LDAP_OPT_TIMELIMIT, 10);
	}
	
	public function authUser ($username, $password) {
		
		if ($username == '' || $password == '') return false;
		
		$username = "cn=$username,OU=all,O=uofr";
		$reply = ldap_bind($this->conn, $username, $password);
		return ($reply) ? true : false;
	}
	
	public function error () {
		ldap_get_option($this->conn, LDAP_OPT_ERROR_STRING, $error);
		return $error;
	}
	
	public function __destruct() {
		ldap_unbind($this->conn);
	}
	
}

?>