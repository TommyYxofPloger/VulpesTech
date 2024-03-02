<?php
	namespace VT;

	class Application
	{
		private $Controller;

		private function setApp(){

			$loadName = 'VT\CONTROLLERS\\';
			$url = explode('/',@$_GET['url']);

			if($url[0] == ''){
				$loadName.='Home';
			}else{
				$loadName.=ucfirst(strtolower($url[0]));
			}

			$loadName.='Controller';

			if(file_exists($loadName.'.php')){
				$this->Controller = new $loadName;
			}else{
				include('VIEW\PAGES\404.php');
				die();
			}
		}

		public function run(){
			$this->setApp();
			$this->Controller->index();

		}
	}

?>