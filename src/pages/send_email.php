<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // Path to PHPMailer autoload.php

// Retrieve form data
$data = json_decode(file_get_contents('php://input'), true);

// Prepare email content
$to = 'your-email@example.com'; // Change this to your email address
$subject = $data['subject'];
$message = "
    First Name: {$data['firstName']}
    Last Name: {$data['lastName']}
    Email: {$data['email']}
    Phone: {$data['phone']}
    Job Title: {$data['jobTitle']}
    Message: {$data['message']}
";

// Create a new PHPMailer instance
$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->isSMTP();
    $mail->Host       = 'smtp.example.com';  // SMTP server
    $mail->SMTPAuth   = true;
    $mail->Username   = 'your@example.com'; // SMTP username
    $mail->Password   = 'your_password';   // SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS; // Enable TLS encryption
    $mail->Port       = 587; // TCP port to connect to

    //Recipients
    $mail->setFrom('your@example.com', 'Your Name');
    $mail->addAddress($to, 'Recipient Name'); // Add a recipient

    // Content
    $mail->isHTML(true); // Set email format to HTML
    $mail->Subject = $subject;
    $mail->Body    = $message;

    // Send email
    $mail->send();
    http_response_code(200);
    echo json_encode(array("message" => "Email sent successfully"));
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(array("message" => "Failed to send email: " . $mail->ErrorInfo));
}
?>
