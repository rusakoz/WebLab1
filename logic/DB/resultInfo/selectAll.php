<?php
require ('../database.php');

$data = [
    'id' => $_POST['id']
];

function selectInfo($table, $param = []){
    global $pdo;
    $sql = "SELECT * FROM " . "`" . "$table" . "`";
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
    $query = $pdo->prepare($sql);
    $query->execute();
    dbError($query);
    return $query->fetchAll();
}

$result = selectInfo($_POST['table'], $data);



$to_encode = array();
forEach($result as $key) {
    $to_encode[0] = $_POST['test'];
    $to_encode[] = $key;
}

echo json_encode($to_encode);