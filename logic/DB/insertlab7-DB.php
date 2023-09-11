<?php
require ('database.php');


$data = [
    'id' => $_POST['id'],
    'score' => $_POST['score'],
    'prof' => $_POST['prof'],
    'diff' => $_POST['diff']

];

insert($_POST['table'], $data);