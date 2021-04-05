<?php
include 'phpmailer/password.php';
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$email = $_POST['email'];

// Формирование самого письма
if (count($_POST) == 1) {
    $title = "Новое обращение Ehya";
    $body = "<b>Почта для подписки:</b> $email";
} 
else if (count($_POST) == 3) {
    $title = "Новое обращение Ehya";
    $body = "
<h2>Новое обращение</h2>
<b>Имя:</b> $name<br>
<b>Телефон:</b> $phone<br>
<b>Сообщение:</b><br>$message<br>
";
}
else if (count($_POST) == 4) {
    $title = "Новое обращение Ehya";
    $body = "
<h2>Новое обращение</h2>
<b>Имя:</b> $name<br>
<b>Телефон:</b> $phone<br>
<b>Электронная почта:</b> $email<br>
<b>Сообщение:</b><br>$message<br>
";
}

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    $mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.yandex.ru'; // SMTP сервера вашей почты
    $mail->Username   = 'thekrasnoe@yandex.ru'; // Логин на почте
    $mail->Password   = $password; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('thekrasnoe@yandex.ru', 'thekrasnoe'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('thekrasnoe@yandex.ru');

    // Отправка сообщения
    $mail->isHTML(true);
    $mail->Subject = $title;
    $mail->Body = $body;

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
header('Location: thankyou.html');
?>