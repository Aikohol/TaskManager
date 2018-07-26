<?php

namespace Core;

class Core {
	public function run() {
		$url = substr($_SERVER['REQUEST_URI'], strlen(BASE_URI));
		$controller = 'src\Controller\\' . ucfirst(explode('/', $url)[1]) . 'Controller';
		$action = explode('/', $url)[2] . 'Action';

		$call = new $controller();
		// die($url);
		$call->$action();
	}
}
?>
