<?php
/*
* archvos de configuracion
*/
define('runtime','production' );  // development || production
#domine
if (runtime === 'development'){
  define('DOMINE', 'http://localhost');
} else {
  define('DOMINE', 'https://react-ssr.000webhostapp.com/');
}
header("Content-type: text/html");
header("Access-Control-Allow-Origin: ". DOMINE);
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Max-Age: 1000");
header("Access-Control-Allow-Headers: Content-Type, *");
header("Access-Control-Allow-Methods: PUT, POST, GET, OPTIONS, DELETE");
#database conexion
if (runtime === 'development'){
  define('DB_NAME', 'app');
  define('DB_HOST', 'localhost');
  define('DB_USER','root');
  define('DB_PASS', '');
  define('DB_CHARSET','utf8');
} else {
  define('DB_NAME', 'id10415441_app');
  define('DB_HOST', 'localhost');
  define('DB_USER','id10415441_app');
  define('DB_PASS', 'Jesuselpoeta4772');
  define('DB_CHARSET','utf8');
}
//dates
define('SITENAME', 'Localhost');
//masterkey
define('MASTERKEY', 'MARISOLTEEXTRAÑO');
