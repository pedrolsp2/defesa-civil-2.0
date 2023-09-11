<?php

include_once "../../connection/index.php";

$dados = filter_input_array(INPUT_POST, FILTER_DEFAULT);

$modelo = ucwords(strtolower($dados['modelo'])); 
$placa = ucwords(strtoupper($dados['placa'])); 


$query_usuario = "INSERT INTO ambulance (modelo, ano, placa, situacao) VALUES (:Modelo, :Ano, :Placa, :Situacao)";

$cad_user = $pdo->prepare($query_usuario);
$cad_user->bindParam(':Modelo', $modelo);
$cad_user->bindParam(':Ano', $dados['ano']);
$cad_user->bindParam(':Placa', $placa);
$cad_user->bindParam(':Situacao', $dados['situacao']);
$cad_user->execute();

if($cad_user->rowCount()){   
    $retorna = ['status' => true, 'msg' => "Ambulância cadastrada com sucesso!"];
}else{
    $retorna = ['status' => false, 'msg' => "Erro ao cadastrar a Ambulância"];
}    

echo json_encode($retorna);