<?php

require('connect.php');

function test($value){
    echo '<pre>';
    print_r($value);
    echo '</pre>';
}

function dbError($query){
    $errInfo = $query->errorInfo();
    if ($errInfo[0] !== PDO::ERR_NONE){
        echo $errInfo[2];
        exit();
    }
    return true;
}

function selectAll($table, $param = []){
    global $pdo;
    $sql = "SELECT * FROM $table";
    if (!empty($param)){
        $i = 0;
        foreach ($param as $key => $value){
            if (!is_numeric($value)){
                $value = "'".$value."'";
            }
            if ($i === 0){
                $sql = $sql . " WHERE $key=$value";
            }else{
                $sql = $sql . " AND $key=$value";
            }
            $i++;
        }
    }
    $query = $pdo->prepare($sql);
    $query->execute();
    dbError($query);
    return $query->fetchAll();
}


function selectOne($table, $param = []){
    global $pdo;
    $sql = "SELECT * FROM $table";
    if (!empty($param)){
        $i = 0;
        foreach ($param as $key => $value){
            if (!is_numeric($value)){
                $value = "'".$value."'";
            }
            if ($i === 0){
                $sql = $sql . " WHERE $key=$value";
            }else{
                $sql = $sql . " AND $key=$value";
            }
            $i++;
        }
    }

    $sql = $sql . " LIMIT 1";

    $query = $pdo->prepare($sql);
    $query->execute();
    dbError($query);
    return $query->fetch();
}

$param = [

];
test(selectOne('users'));