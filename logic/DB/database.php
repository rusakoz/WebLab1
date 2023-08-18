<?php

session_start();
require('connect.php');

function test($value){
    //echo '<pre>';
    print_r($value);
    //echo '</pre>';
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
                $key = "`".$key."`";
            }
            if ($i === 0){
                $sql = $sql . " WHERE $key=$value";
            }else{
                $sql = $sql . " AND $key=$value";
            }
            $i++;
        }
    }
    //test($sql);
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
                $key = "`".$key."`";
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

function insert($table, $param){
    global $pdo;

    $i = 0;
    $column = '';
    $values = '';
    foreach ($param as $key => $value){
        if ($i === 0){
            $column = $column . $key;
            $values = $values . "'" . "$value" . "'";
        }else{
            $column = $column . ", $key";
            $values = $values . ", '" . "$value"."'";
        }
        $i++;
    }

    $sql = "INSERT INTO " . "`" . "$table" . "`" . " ($column) VALUES ($values)";

    $query = $pdo->prepare($sql);
    $query->execute($param);
    dbError($query);

    return $pdo->lastInsertId();
}

function insertInt($table, $param){
    global $pdo;

    $i = 0;
    $column = '';
    $values = '';
    foreach ($param as $key => $value){
        if ($i === 0){
            $column = $column . $key;
            $values = $values . "$value";
        }else{
            $column = $column . ", $key";
            $values = $values . ", " . "$value";
        }
        $i++;
    }

    $sql = "INSERT INTO " . "`" . "$table" . "`" . " ($column) VALUES ($values)";

    $query = $pdo->prepare($sql);
    $query->execute($param);
    dbError($query);

    return $pdo->lastInsertId();
}

function update($table, $id, $param){
    global $pdo;

    $i = 0;
    $string = '';
    foreach ($param as $key => $value){
        if ($i === 0){
            $string = $string . $key . " = '" . $value . "'";
        }else{
            $string = $string .", " . $key . " = '" . $value . "'";
        }
        $i++;
    }

    $sql = "UPDATE $table SET $string WHERE id = $id";

    $query = $pdo->prepare($sql);
    $query->execute($param);
    dbError($query);
}

function delete($table, $id){
    global $pdo;

    $sql = "DELETE FROM $table WHERE id = $id";

    $query = $pdo->prepare($sql);
    $query->execute();
    dbError($query);
}

$dat = [

    'group' => 'Личностные'
];

//$res = selectAll('pvk', $dat);

//test(selectAll('pvk', $dat));



//foreach ($res as $row){

    //echo "group: " . $row['group'];
//}

/*
$data = [
    'admin' => '0',
    'username' => 'Ru32slll',
    'email' => 'whj32hgat@gmail.com',
    'password' => '3223h132'
];

inset('users', $data);

$param = [

];
test(selectOne('users'));

*/