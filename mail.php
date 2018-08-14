<?php
$destinatario = "marketingaaaja@gmail.com";
$nome = $_REQUEST['nome'];
$email = $_REQUEST['email'];
$mensagem = $_REQUEST['mensagem'];
$assunto = "Contato Site Unifesp";

$body = $mensagem;
mail($destinatario, $assunto , $body, "From: $email\r\n");
header("location:index.html");
?>
