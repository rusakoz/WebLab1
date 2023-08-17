<?php
require ('database.php');


$data = [
    'id' => $_SESSION['id'],
    'result' => $_POST['result']

];

insertInt($_POST['table'], $data);