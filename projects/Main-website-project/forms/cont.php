<?php

// Secrets
$siteKey     = '6LfooAAfAAAAAOpyYZZI3FY2lpc4MWmnafXUsdhj';  // Google reCAPTCHA API key configuration https://www.google.com/u/1/recaptcha/admin/
$secretKey     = '';
$passmail = '';


use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'src/Exception.php';
require 'src/PHPMailer.php';
require 'src/SMTP.php';

// Email configuration
$postData = $statusMsg = $valErr = '';
$status = 'error';
$toEmail = 'info@inkua.de';
$fromName = $_POST['name'];
$formEmail = $_POST['email'];
$subject = $_POST['subject'];

$postData = $_POST;
$name = substr(trim($_POST['name']), 0, 240);
$email = substr(trim($_POST['email']), 0, 240);
$subject = substr(trim($_POST['subject']), 0, 540);
$message = substr(trim($_POST['message']), 0, 2540);
$statusMsg = "OK";

$toEmail = "info@inkua.de";

// Validate form fields
if(empty($name)){
  $valErr .= 'Please enter your name.<br/>';
}
if(empty($email) || filter_var($email, FILTER_VALIDATE_EMAIL) === false){
  $valErr .= 'Please enter a valid email.<br/>';
}
if(empty($subject)){
  $valErr .= 'Please enter subject.<br/>';
}
if(empty($message)){
  $valErr .= 'Please enter your message.<br/>';
}

if(empty($valErr)){
  if(isset($_POST['g-recaptcha-response']) && !empty($_POST['g-recaptcha-response'])){

    // Verify the reCAPTCHA response
    $verifyResponse = file_get_contents('https://www.google.com/recaptcha/api/siteverify?secret='.$secretKey.'&response='.$_POST['g-recaptcha-response']);

    // Decode json data
    $responseData = json_decode($verifyResponse);

    // If reCAPTCHA response is valid
    if($responseData->success){

      // Send email notification to the site admin
      $emailsubject = 'Contacto sitio Web';
      $htmlContent = "
          <p><b>Motivo: </b>".$subject."</p>
          <p><b>Nombre: </b>".$name."</p>
          <p><b>Email: </b>".$email."</p>
          <p><b>Message: </b>".$message."</p>
      ";

      $status = 'success';
      $statusMsg = 'OK';
      $postData = '';
      $mail = new PHPMailer(true);
      try {
          $mail->isSMTP();                                            //Send using SMTP
          $mail->Host       = 'mail.inkua.de';                     //Set the SMTP server to send through
          $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
          $mail->Username   = 'info@inkua.de';                     //SMTP username
          $mail->Password   = $passmail;                               //SMTP password
          $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
          $mail->Port       = 465;
          $mail->CharSet = 'UTF-8';
          $mail->Encoding = 'base64';

          //Recipients
          $mail->setFrom($email, $name);
          $mail->addAddress($toEmail, 'Info');     //Add a recipient

          //Content
          $mail->isHTML(true);                                  //Set email format to HTML
          $mail->Subject = $emailsubject." - ". $subject;
          $mail->Body    = $htmlContent;
          $mail->send();

      } catch (Exception $e) {
          echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
          $statusMsg = "Error";
      }
  }else{
      $statusMsg = 'Human verification failed, please try again.';
  }
} else{
  $statusMsg = '<p>Please fill all the mandatory fields:</p>'.trim($valErr, '<br/>');
}
}
// Display status message
echo $statusMsg;
?>
