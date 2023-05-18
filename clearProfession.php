<?php
session_start();

include "path.php";

$_SESSION['select'] = 'false';

header('location: ' . BASE_URL . "PVK.php");
