<?php

include "logic/DB/database.php";

$errPvk = '';
$outPutInfoOfProf = '';
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['button-profession'])){
    $prof = $_POST['profession'];


    if ($prof === "Профессии"){
        $errPvk = "Выберите профессию";
        $_SESSION['select'] = 'false';
    }else{
        $_SESSION['select'] = 'true';
        $errPvk = "Выберите професси32131ю";
        $outPutInfoOfProf = 'Какая-то информация о профессии';
    }

}