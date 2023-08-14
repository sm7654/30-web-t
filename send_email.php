<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $selectedOption = $_POST["selected_option"];
    $message = $_POST["message"];

    $to = "mshsy1514@gmail.com"; // Replace with the recipient's email address
    $headers = "From: $email";

    $fullMessage = "Name: $name\nEmail: $email\nSelected Option: $selectedOption\n\n$message";

    if (mail($to, "Contact Form Submission", $fullMessage, $headers)) {
        echo "Email sent successfully!";
    } else {
        echo "Email could not be sent.";
    }
}
?>
