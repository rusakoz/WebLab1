<?php
require ('../database.php');


$data = [
    'id' => $_POST['id']

];

function select(){

    global $pdo;

    $sql = "SELECT resultpvk.profession AS ПРОФЕССИЯ, pvk.listpvk AS ИД_ПВК, ROUND(AVG(resultpvk.pvkScore),1) AS СР_ОЦЕНКА
            FROM `resultpvk` 
            JOIN `pvk` ON pvk.id = resultpvk.listPVK 
            GROUP BY resultpvk.profession, pvk.id 
            ORDER BY ПРОФЕССИЯ";

    $sql2 = "SELECT resultpvk.id AS resID, resultpvk.profession, resultpvk.listPVK AS reslistPVK, resultpvk.pvkScore, pvk.listPVK, pvk.group 
            FROM `resultpvk` 
            JOIN `pvk` ON pvk.id = resultpvk.listPVK";


    $query = $pdo->prepare($sql);
    $query->execute();
    dbError($query);
    return $query->fetchAll();
}

$result = select();

$to_encode = array();
forEach($result as $key) {
    $to_encode[] = $key;
}

echo json_encode($to_encode);