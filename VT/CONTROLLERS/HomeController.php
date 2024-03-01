<?php 
	namespace VT\CONTROLLERS;

	class HomeController
	{

		public function index(){

			\VT\VIEW\MainView::render('About');
		}
	}

?>