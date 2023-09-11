<?php

$user = 'root';
$senha = '';
$db = "defesacivil";
$host = 'localhost';

$mysqli = new mysqli($host, $user, $senha, $db);
$pdo = new PDO('mysql:host=localhost;dbname=defesacivil', 'root', '');

if($mysqli->error){
    die('Erro ao conectar' . $mysqli->error);
} 
?>