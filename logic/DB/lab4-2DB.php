<?php
require ('database.php');


$data = [
    'id' => $_SESSION['id'],
    'super' => $_POST['super'],
    'good' => $_POST['good'],
    'loss' => $_POST['loss'],
    'time' => $_POST['time']

];

insertInt($_POST['table'], $data);