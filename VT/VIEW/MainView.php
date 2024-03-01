<?php 

	namespace VT\VIEW;

	class MainView{

		public static function render($filename){
			include('PAGES/'.$filename.'.php');
		}

	}

?>