<?php

include_once "../../connection/index.php";

    $status = "";

    if(isset($_POST['user']) || isset($_POST['password'])){
        if(strlen($_POST['user']) == 0 || strlen($_POST['password']) == 0){
            $status = ['status' => false, 'msg' => "Preencha todos os campos."];
        }
        else{

            $email = $mysqli->real_escape_string($_POST['user']);
            $senha = $mysqli->real_escape_string($_POST['password']);

            $sql_code = "SELECT * FROM users WHERE email_user = '$email' OR name_user = '$email' AND password_user = '$senha'";
            $sql_query = $mysqli->query($sql_code) or die('Falha no SQL: ' . $mysqli->error);

            $qnd = $sql_query->num_rows;

            if($qnd == 1){
                $usuario = $sql_query->fetch_assoc();
                $nomeCompleto = $usuario['name_user'];
                $palavras = explode(" ", $nomeCompleto);
                $primeiraPalavra = $palavras[0];
                $status = ['status' => true, 'msg' => "Bem vindo!", "user_info" => ["id" => $usuario['id_user'], "nome" => $primeiraPalavra]];
            }else{
                $status = ['status' => false, 'msg' => "E-mail ou senha incorretos."];
            }

        }
    }    

    echo json_encode($status);
?>