<?php
include ('database.php');

$data = [
    'id' => $_SESSION['id'],
    'time' => $_POST['results']

];

insert($_POST['table'], $data);