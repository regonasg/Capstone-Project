<?php
session_start();

include "inc/login.inc.php";
$success = '';
$error = '';

?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml"><head>

  <meta content="text/html; charset=UTF-8" http-equiv="Content-Type"/>
  <title>Testing page | U of R, University of Regina</title>
		
</head>

<body>
     
<div id="page_container" style="text-align:center;">
<h1>Sample Page</h1>
 
	<div id="page_content">
		
		<?=($error != '') ? '<div class="error"><b>ERROR:</b> '.$error.'</div>' : '';?>
	  <?=($success != '') ? '<div class="success">'.$success.'</div>' : '';?>
				
		<?php
		if ( isset($_SESSION['isLoggedIn']) &&  $_SESSION['isLoggedIn'] == 'true') 
			{
			// login was valid - add some code here

			?>
			<h2>Welcome</h2>
			<h3 style="color:blue;">Log in was valid!</h3>
			<p>Add code to create main screen or provide away to logout</p>

			<form method="post">
			<input type="hidden" name="cmd" value="logout" />			
			<p><input type="submit" name="sub" class="sub" value="Logout" /></p>			
			</form>

		<?php
					 
			} 
		else 
		  {
			// login failed
		?>
			<div id="loginBox">
				
					<form method="post">
					<input type="hidden" name="cmd" value="login" />
					
					<h3>Simple Student Login</h3>
					
					<?=($lgnError != '') ? '<div class="error">'.$lgnError.'</div>' : '';?>
					
					<p><input type="text" id="fldUsername" class="txt" name="username" placeholder="username" required /></p>
					
					<p><input id="fldPassword" type="password" class="txt" name="password" placeholder="password" required ></p>
					
					<p><input type="submit" name="sub" class="sub" value="Login" />
					
					</form>
					
					<a href="https://novapp.cc.uregina.ca/perl/studentlookup.cgi/" target="_blank">Forgot Username?</a> | <a href="https://novapp.cc.uregina.ca/perl/resetpass.cgi" target="_blank">Forgot Password?</a>
					
				</div>
			
		<?php
			}  // end login failed
		?>

	</div>
</div>

</body>
</html>
