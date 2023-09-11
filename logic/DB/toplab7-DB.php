<?php
require ('database.php');
//$sql = "with res AS(SELECT top.id, top.score, top.prof, top.diff, users.username, MAX(top.diff) OVER (PARTITION BY top.id) AS MaxSalary FROM `top` JOIN users ON users.id = top.id) SELECT * FROM res WHERE res.diff = res.MaxSalary;";


function select(){

    global $pdo;

    $sql = "with res AS(
            SELECT top.id, top.score, top.prof, top.diff, users.username, MAX(top.diff) OVER (PARTITION BY top.id) AS MaxSalary 
            FROM `top` 
            JOIN users ON users.id = top.id) 
            SELECT * 
            FROM res 
            WHERE res.diff = res.MaxSalary
            ORDER BY res.diff DESC;";

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