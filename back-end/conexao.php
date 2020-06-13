<?php 

$banco = 'crudangular9';
$host = 'localhost';
$usuario = 'root';
$senha = '';

try {
    $pdo = new PDO("mysql:dbname=$banco;host=$host", "$usuario", "$senha");
} catch (Exception $e) {
    echo "Erro para conectar com o banco de dados ".$e;
}

?>