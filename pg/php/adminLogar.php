<?php
session_start();

$dataBase = "binarios";
$user = "root";
$pass = "";
$hostname = "localhost";

$conexao = mysqli_connect($hostname, $user, $pass, $dataBase);

if (!$conexao) {
    die("Erro na conexão: " . mysqli_connect_error());
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $emailAdmin = $_POST['emailAdmin'];
    $senhaAdmin = $_POST['passAdmin'];

    $sql = "SELECT * FROM admin WHERE emailAdmin = '$emailAdmin' AND senhaAdmin = '$senhaAdmin'";

    $resultado = mysqli_query($conexao, $sql);

    if ($resultado) {
        if (mysqli_num_rows($resultado) == 1) {
            header("Location: admin.php");
            exit;
        } else {
            $erro = "Credenciais inválidas. Tente novamente.";
        }
    } else {
        $erro = "Erro na consulta SQL: " . mysqli_error($conexao);
    }
}

mysqli_close($conexao);
?>
