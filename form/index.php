<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);
setlocale(LC_ALL,"es_ES","es_ES","esp");
date_default_timezone_set('America/Costa_Rica');

include_once('phpmailer/PHPMailer.php');

use PHPMailer\PHPMailer\PHPMailer;

if( isset($_POST['name_txt']) && isset($_POST['service_txt'])) {

	$_subject = 'Contacto republikaindependiente.com - '.$_POST['name_txt'];

	$_msj = '<!DOCTYPE html>
	<html lang="es">
	<head>
	<meta charset="UTF-8">
	<title>'.$_subject.'</title>
	</head>
	<body style="margin: 10px;">
	<div style="max-width:640px;background-color: #fff;border:1px solid #999;padding:10px;box-sizing:border-box; font-family: Arial, Helvetica, sans-serif; font-size: 11px; margin: auto;">
	<p>Ha recibido un contacto del formulario web de republikaindependiente.com, el dia '.strftime("%A %d de %B de %Y a las %H:%M %p").'.</p>';

	$_msj .= '<p><strong style="color:#999;">Nombre:</strong><br>'.$_POST['name_txt'].'</p>';
	$_msj .= '<p><strong style="color:#999;">Teléfono:</strong><br>'.$_POST['phone_txt'].'</p>';
	$_msj .= '<p><strong style="color:#999;">Correo Electrónico:</strong><br><a href="mailto:'.$_POST['email_txt'].'">'.$_POST['email_txt'].'</a></p>';
	$_msj .= '<hr><p><strong style="color:#999;">Servicio de interés:</strong><br>'.$_POST['service_txt'].'</p>';
	$_msj .= '<p><strong style="color:#999;">Mensaje:</strong><br>'.nl2br($_POST['msj_txt']).'</p>';

	$_msj .= '</div>
	</body>
	</html>';

	$mail = new PHPMailer;
	$mail->CharSet = 'UTF-8';
	$mail->Encoding = 'base64';
	$mail->setFrom('noreply@republikaindependiente.com', 'No Reply');
	$mail->addReplyTo($_POST['email_txt'], $_POST['name_txt']);
	$mail->AddAddress("info@republikaindependiente.com","Info RI");
	$mail->AddCC("mlopdo@republikaindependiente.com","Marie Lopardo");
	$mail->AddCC("maufallas@republikaindependiente.com","Mau Fallas");
	$mail->AddBCC('bernethe@gmail.com', 'Harold Soto');
	$mail->Subject = $_subject;
	//Read an HTML message body from an external file, convert referenced images to embedded,
	//convert HTML into a basic plain-text alternative body
	$mail->IsHTML(true);
	$mail->Body = $_msj;
	//send the message, check for errors
	$mail->send();
	echo '{"done":"1"}';
} else {
	echo '{"done":"2"}';
}

?>