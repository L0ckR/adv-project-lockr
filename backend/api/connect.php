<?php

// db credentials
define('DB_HOST', 'a357297.mysql.mchost.ru');
define('DB_USER', 'a357297_bd');
define('DB_PASS', '12345678Ddd');
define('DB_NAME', 'a357297_bd');

// Connect with the database.
function connect()
{
  $connect = mysqli_connect(DB_HOST ,DB_USER ,DB_PASS ,DB_NAME);

  if (mysqli_connect_errno($connect)) {
    die("Failed to connect:" . mysqli_connect_error());
  }

  mysqli_set_charset($connect, "utf8");

  return $connect;
}

$con = connect();