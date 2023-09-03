<?php
require ('../database.php');



$data = [
    '0' => $_POST['0b'],
    '10' => $_POST['10b'],
    '20' => $_POST['20b'],
    '30' => $_POST['30b'],
    '40' => $_POST['40b'],
    '50' => $_POST['50b'],
    '60' => $_POST['60b'],
    '70' => $_POST['70b'],
    '80' => $_POST['80b'],
    '90' => $_POST['90b'],
    '100' => $_POST['100b']
];

for ($i = 0; $i <= 100; $i+=10){

    if (!isset($_POST[$i . 'b'])){
        unset($data[$i]);
    }

}

update($_POST['table'], $_POST['name'], $data);