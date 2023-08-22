<?php

$driver = 'mysql';
$host = 'localhost';
$db_name = 'lab1';
$db_user = 'root';
$db_password = 'mysql';
$charset = 'utf8';
$options = [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION, PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC];

function connect($driver, $host, $db_name, $db_user, $db_password, $charset, $options): PDO
{
    return new PDO(
        "$driver:host=$host;dbname=$db_name;charset=$charset",
        $db_user, $db_password, $options
    );
}
function reconnect($driver, $host, $db_name, $db_user, $db_password, $charset, $options): PDO
{
    try{
        return connect($driver, $host, $db_name, $db_user, $db_password, $charset, $options);
    }catch (PDOException $i) {
        echo $i->getMessage();
        header("Refresh:0");
        return reconnect($driver, $host, $db_name, $db_user, $db_password, $charset, $options);
    }
}

$pdo = reconnect($driver, $host, $db_name, $db_user, $db_password, $charset, $options);
