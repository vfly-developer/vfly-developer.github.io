<?php

if(isset($_POST['submit'])) {
    $firstName = $_POST['firstName'];
    $lastName = $_POST['lastName'];
    $mailFrom = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $mailTo = "vinhn204@yahoo.com"
    $headers = "From: ".$mailFrom;
    $body = "You have received an email from ".$firstName." ".$lastName."\n\n".$message;

    mail($mailTo, $subject, $body, $headers);
    header("Location: main-page.html?mailsend");
}