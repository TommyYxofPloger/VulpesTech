<?php
	
	session_start();

	require('vendor/autoload.php');

	define('INCLUDE_PATH_STATIC', 'http://localhost/VT/VIEW/PAGES/');
	define('INCLUDE_PATH', 'http://localhost/');

	$app = new VT\Application();

	$app->run();
?>