<?php

include "logic/DB/database.php";

function redirect($user){
    $_SESSION['id'] = $user['id'];
    $_SESSION['login'] = $user['username'];
    $_SESSION['admin'] = $user['admin'];

    if ($_SESSION['admin']){
        header('location: ' . BASE_URL . 'admin.php'); // редирект админа на админку
    }else{
        header('location: ' . BASE_URL); // редирект пользователя на главную страницу
    }
}

// Регистрация
$submit = false;
$outErr = '';
// POST - запрос от пользователя, GET - пользователь только зашел на страницу
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['button-registration'])){

    $login = trim($_POST['login']); // trim удаляет лишние пробелы
    $email = trim($_POST['email']);
    $password1 = trim($_POST['firstPass']);
    $password2 = trim($_POST['secondPass']);
    $admin = 0;

    if ($login === '' || $email === '' || $password1 === ''){
        $outErr = "Заполните все поля";
    }elseif (mb_strlen($login, 'UTF-8') < 2){
        $outErr = "Введите логин длиннее 2-х символов";
    }elseif ($password1 !== $password2) {
        $outErr = "Пароли должны совпадать";
    }else{
            $exist = selectOne('users', ['username' => $login]);
            if ($exist) {
                if ($exist['username'] === $login) {
                    $outErr = 'Пользователь с таким логином уже зарегистрирован';
                }
            }else {
                $passHash = password_hash($password1, PASSWORD_DEFAULT);
                $data = [
                    'admin' => $admin,
                    'username' => $login,
                    'email' => $email,
                    'password' => $passHash
                ];
                $id = insert('users', $data);
                $user = selectOne('users', ['id' => $id]);

                redirect($user);

            }
    }

    // $lastStr = selectOne('users', ['id' => $id]);
}else{

    $login = ''; // для сохранения введенных данных
    $email = '';
}

//Авторизация
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['button-log'])){
    $login = trim($_POST['login']); // trim удаляет лишние пробелы
    $password = trim($_POST['password']);

    if ($login === '' || $password === ''){
        $outErr = "Заполните все поля";
    }else{
        $exist2 = selectOne('users', ['username' => $login]);
        if ($exist2 && password_verify($password, $exist2['password'])){

            redirect($exist2);

        }else{
            $outErr = 'Логин или пароль введены неверно';
        }
    }
}else{
    $email = ''; // для сохранения введенных данных
}




