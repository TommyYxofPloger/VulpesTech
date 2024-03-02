<?php
	
	session_start();

	require('vendor/autoload.php');

	define('INCLUDE_PATH_STATIC', 'https://vulpestech.com.br/VT/VIEW/PAGES/');
	define('INCLUDE_PATH', 'https://vulpestech.com.br/');

	$app = new VT\Application();

	$app->run();
?>