<?php
require ('database.php');


$data = [
    'id' => $_SESSION['id'],
    'hit' => $_POST['hit'],
    'far' => $_POST['far'],
    'close' => $_POST['close'],
    'loss' => $_POST['loss'],
    'time' => $_POST['time']

];

insertInt($_POST['table'], $data);