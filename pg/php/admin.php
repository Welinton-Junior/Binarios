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

$sql = "SELECT idContato, conNomeCompleto, conEmail, conTel, conAssunto FROM contato";

$resultado = mysqli_query($conexao, $sql);

if (!$resultado) {
    die("Erro na consulta SQL: " . mysqli_error($conexao));
}
?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lista de Contatos</title>
    <link rel="stylesheet" href="../../bootstrap-5.3.2-dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="../../css/lista.css">

</head>

<body>

    <div class="container">

        <div class="body2">

            <a href="../../index.html">Voltar</a>

            <h1 class="text-center">Lista de Contatos</h1>

            <div class="tabelaBox" style="max-height: 70%; overflow-y: auto;">

                <table class="tabela mt-5" border="1">
                    <tr class="tr">
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Telefone</th>
                        <th>Email</th>
                        <th>Assunto</th>
                    </tr>
                    <?php
                    while ($row = mysqli_fetch_assoc($resultado)) {

                        echo "<tr>";
                        echo "<td>{$row['idContato']}</td>";
                        echo "<td>{$row['conNomeCompleto']}</td>";
                        echo "<td>{$row['conTel']}</td>";
                        echo "<td>{$row['conEmail']}</td>";
                        echo "<td>{$row['conAssunto']}</td>";
                        echo "</tr>";
                    }
                    ?>
                </table>

                <?php
                mysqli_close($conexao);
                ?>
            </div>
        </div>
    </div>
    <div class="footer bg-dark">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-sm-4 col-xs-12">
                    <div class="single_footer bg-">
                        <a href="../../index.html"><img src="../../img/logo-branco.png" width="250" srcset=""></a>

                    </div>
                </div>


                <div class="col-lg-4 col-sm-4 col-xs-12">
                    <div class="single_footer">
                        <h4>Contato</h4>
                        <ul>
                            <li><a href="../html/contato.html">Iniciar conversa</a></li>


                        </ul>
                    </div>
                </div>


                <!--- END COL -->
                <div class="col-md-4 col-sm-4 col-xs-12">
                    <div class="single_footer single_footer_address">
                        <h4>Midias Sociais</h4>
                        <ul>
                            <li><a href="https://www.facebook.com/binarios">Facebook</a></li>
                            <li><a href="https://www.instagram.com/binarios/">Instagram</a></li>

                        </ul>
                    </div>
                </div>
                <!--- END COL -->
                <div class="col-md-4 col-sm-4 col-xs-12">

                </div>
                <!--- END COL -->
            </div>
            <!--- END ROW -->
            <div class="row">
                <div class="col-lg-12 col-sm-12 col-xs-12">
                    <p class="copyright">Copyright © 2023 <a href="#">BINAR10S</a>.</p>
                </div>
                <!--- END COL -->
            </div>
            <!--- END ROW -->
        </div>
        <!--- END CONTAINER -->
    </div>

</body>

</html>