<?php
require ('database.php');


$data = [
    'id' => $_SESSION['id'],
    'time' => $_POST['time']

];

insertInt($_POST['table'], $data);