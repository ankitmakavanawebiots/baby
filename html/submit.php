<?php
    $to = "ankit.makvana@webiots.in";
    $subject     = "Contact Us";
    
    $name = '';
    $email = '';
    $message = '';
    $mobile = '';

    if(isset($_POST['name']))
	{
	    $name = $_POST['name'];
	}
	if(isset($_POST['message']))
	{
	    $message1 = $_POST['message'];
	}

	if(isset($_POST['mobile']))
	{
	    $mobile = $_POST['mobile'];
	}

	if(isset($_POST['email']))
	{
	    $email = $_POST['email'];
	}

    $header = "From:".$email." \r\n";
    $header .= "MIME-Version: 1.0\r\n";
    $header .= "Content-type: text/html\r\n";
    
    $message= "";
    $message .= "Email: ".$email."\n";
    $message .= "Name: ".$name."\n";
	$message .= "Mobile: ".$mobile."\n";
	$message .= "Message: ".$message1."\n";
	
    if(@mail ($to,$subject, $message, $header) )
	{
	  echo 1;
	}else{
	  echo 2;
	}
?>
