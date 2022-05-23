<?php 

$name = $_POST['name'];
$phone = $_POST['phone'];
$viber = $_POST['viber'];
$telegram = $_POST['telegram'];
$email = $_POST['email'];
$brand = $_POST['brand'];
$model = $_POST['model'];
$budget = $_POST['budget'];
$text = $_POST['text'];
$fuel = $_POST['fuel'];
$body = $_POST['body'];

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

// $mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = '';                 // Наш логин
$mail->Password = '';                           // Наш пароль от ящика
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to
 
$mail->setFrom('', 'W8');   // От кого письмо 
$mail->addAddress('');     // Add a recipient
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Данные';
$mail->Body    = '
		Пользователь оставил данные <br> 
	Имя: ' . $name . ' <br>
	Номер телефона: ' . $phone . '<br>
	Номер Viber: ' . $viber . '<br>
	Номер Telegram: ' . $telegram . '<br>
	Марка авто: ' . $brand . '<br>
	Модель авто: ' . $model . '<br>
	Тип топлива: ' . $fuel . '<br>
	Тип кузова: ' . $body . '<br>
	Бюджет (USD): ' . $budget . '<br>
	Сообщение: ' . $text . '<br>
	E-mail: ' . $email . '';

if(!$mail->send()) {
    return false;
} else {
    return true;
}

?>