<?php
require ('../database.php');


$data = [
    'id' => $_POST['id']

];


$result = selectAll($_POST['table']);

$to_encode = array();
forEach($result as $key) {
    $to_encode[] = $key;
}
echo json_encode($to_encode);