<?php 

    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: Content-Type');

    // 'Access-Control-Allow-Headers', ''
    echo $_SERVER['REQUEST_METHOD'];
?>


<?php

 // how to get this out of the POST request
 $data = json_decode( file_get_contents('php://input'));

// reply to email
$email = $data->followUpEmail;

// Always set content-type when sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

if ($data->followUp == 'email') {
    $headers .= 'Reply-To: '. $email . "\r\n";
}

// More headers
$headers .= 'From: <contact-form@skinnytiemedia.com>';

$body = 'NAME: ' . $data->name. '<br/>'; 

$body = $body . 'WHAT CAN WE DO FOR YOU: '. $data->contactFormText. '<br/><br/>';

$body = $body . 'HOW TO FOLLOW UP: '. $data->followUp. '<br/>';

if ($data->followUp == 'email') {
    $body = $body . 'CONTACT INFO: '. $data->followUpEmail. '<br/>';
}

if ($data->followUp == 'phone') {
    $body = $body . 'CONTACT INFO: '. $data->followUpPhone. '<br/>';
}



$body = wordwrap($body,70);

// will only send email if we have a POST request
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    
    $subject = "CONTACT FORM -- " . $data->name;
    // send email
    // dev
    // mail("sean.dolinar@gmail.com", $subject, $body, $headers);
    //mail("sjjd199@gmail.com", $subject, $body, $headers);
    mail("hello@skinnytiemedia.com", $subject, $body, $headers);
}
else {
    //mail("sean.dolinar@gmail.com","Options Only", $_SERVER['REQUEST_METHOD'], $headers);
}

?>