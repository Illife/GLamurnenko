<?php
$email = $_POST['email'];
$tel = $_POST['tel'];
$msg = $_POST['msg'];
$email = htmlspecialchars($email);
$tel = htmlspecialchars($tel);
$msg = htmlspecialchars($msg);
$email = urldecode($email);
$tel = urldecode($tel);
$msg = urldecode($msg);
$email = trim($email);
$tel = trim($tel);
$msg = trim($msg);
if (mail("manukyan.mariya@mailiq24.ru", "Заявка с сайта", "Email:".$email.". Phone: ".$tel.". Msg: ".$msg ,"From: fr15876@fr15876.isprinethost.ru \r\n"))
 {     echo "сообщение успешно отправлено";
} else {
    echo "при отправке сообщения возникли ошибки";
}?>
