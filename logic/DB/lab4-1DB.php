<?php
require ('database.php');


$data = [
    'id' => $_SESSION['id'],
    'result' => $_POST['result'],
    'time' => $_POST['time']

];

insertInt($_POST['table'], $data);