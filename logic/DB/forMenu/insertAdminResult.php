<?php
require ('../database.php');

$data = [
    'профессия' => $_POST['профессия'],
    'пвк' => $_POST['пвк'],
    'Сенсомоторные_тесты' => $_POST['Сенсомоторные_тесты'],
    'Тесты_3-й_лабы' => $_POST['Тесты_3-й_лабы'],
    'Тесты_4-й_лабы' => $_POST['Тесты_4-й_лабы'],
    'Тесты_5-й_лабы' => $_POST['Тесты_5-й_лабы'],
    'ср_оценка_эксперта' => $_POST['ср_оценка_эксперта']

];

//echo $_POST['профессия'];

insert($_POST['table'], $data);