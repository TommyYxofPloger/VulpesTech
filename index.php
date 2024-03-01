<?php
	
	session_start();

	require('vendor/autoload.php');

	define('INCLUDE_PATH_STATIC', 'https://vulpestech.netlify.app/vt/VIEW/PAGES/');
	define('INCLUDE_PATH', 'https://vulpestech.netlify.app/');

	$app = new VT\Application();

	$app->run();
?>