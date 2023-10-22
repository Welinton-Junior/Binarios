<?php

$dataBase = "binarios";
$user = "root";
$pass = "";
$hostname = "localhost";

$conexao = mysqli_connect($hostname, $user, $pass, $dataBase);

$nomeContato = $_POST['nomeContato'];
$emailContato = $_POST['emailContato'];
$foneContato = $_POST['foneContato'];
$assuntoContato = $_POST['assuntoContato'];

$sql = "INSERT INTO contato (conNomeCompleto, conEmail, conTel, conAssunto) VALUES ('$nomeContato', '$emailContato', '$foneContato', '$assuntoContato')";

if (mysqli_query($conexao, $sql)) {
    echo "<script>alert('Mensagem enviada com sucesso');window.location.href = '../../index.html';</script>";
} else {
    echo "<script>alert('Houve um erro ao enviar a mensagem');window.location.href = '../../index.html';</script>" . mysqli_error($conexao);
}


mysqli_close($conexao);

?>
