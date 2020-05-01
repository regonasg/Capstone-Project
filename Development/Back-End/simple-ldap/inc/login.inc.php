<?php
include "inc/classes/ldap.class.php";

$config['site_url'] = '/simple-ldap/';
//$_SESSION['isLoggedIn'] = "false";
$lgnError = "";


if ( isset($_POST['cmd']) && $_POST['cmd'] == 'login' && strlen($_POST['username']) <= 10 && strlen($_POST['password']) > 0 ) 
	{	
	$username = $_POST['username'];
	$password = $_POST['password'];
	
	$ldap = new ldapUR();

	$isLoggedIn = ($ldap->authUser($username, $password)) ? true : false;
	
	if ($isLoggedIn) 
		{
		// add any custom code you need here
		$_SESSION['isLoggedIn'] = "true";	
		} 
	else 
		{
		$_SESSION['isLoggedIn'] = "false";	
		$lgnError = "Failed login, please try again!";
		echo ($ldap->error() != '') ? "<!-- ERROR: ".$ldap->error()." -->" : "";
		}
	}
else if (isset($_POST['cmd']) && $_POST['cmd'] == 'logout')
	{
	$_SESSION['isLoggedIn'] = "false";
	session_destroy();
	unset($_SESSION);
	header("Location: ".$config['site_url']);	
	}
else
	{
	// form was not sent or invalid POST action received - ignore login attempt
	} 
