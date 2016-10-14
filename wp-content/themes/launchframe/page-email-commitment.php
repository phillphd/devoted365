<?php

if ($_POST["emailAddress"]) {

	$to = "hill.patrick.m@gmail.com";
	$headers = "From: " . $_POST["firstName"] . " " . $_POST["lastName"] . " <" . $_POST["emailAddress"] . ">" . "\r\n";
	$subject = "Devoted / 365 Commitment Card";

	$message = "";
	$message .= "First Name: " . $_POST["firstName"] . ", \n";
	$message .= "Last Name: " . $_POST["lastName"] . ", \n";
	$message .= "Email Address: " . $_POST["emailAddress"] . ", \n";
	$message .= "Phone Number: " . $_POST["phoneNumber"] . ", \n";
	$message .= "Annual Giving: $" . $_POST["annualGift"] . ", \n";
	$message .= "Devoted / 365 Giving: $" . $_POST["devotedGift"] . ", \n";
	$message .= "One Time Gift: $" . $_POST["oneTimeGift"] . ", \n";
	$message .= "Total Contribution: $" . $_POST["oneYearGift"] . ", \n";
	$message .= "Two Year Contribution: $" . $_POST["twoYearGift"];

	wp_mail( $to, $subject, $message, $headers );

	return "Commitment Sent Successfully";
} else {
	return "Commitment Not Made";
}
