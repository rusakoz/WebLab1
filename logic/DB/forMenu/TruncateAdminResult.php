<?php
require ('../database.php');


//$data = [
//    'id' => $_POST['id']
//
//];

function truncate(){

    global $pdo;

    $sql = "TRUNCATE TABLE `adminResult`";


    $query = $pdo->prepare($sql);
    $query->execute();
    dbError($query);
}

truncate();

