<?php
session_start();

include "path.php";

unset($_SESSION['id']);
unset($_SESSION['login']);
unset($_SESSION['admin']);
unset($_SESSION['role']);

header('location: ' . BASE_URL); // редирект пользователя на главную страницу