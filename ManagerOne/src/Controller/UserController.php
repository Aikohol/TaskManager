<?php

namespace src\Controller;

class UserController extends \Core\Controller {

	public function indexAction()
	{
		// Working on POSTMAN
		$users = new \src\Model\UserModel($this->params);
		$users = $users->find();
		echo json_encode($users);
	}
	public function addAction()
	{
		// Working on POSTMAN
		$user = new \src\Model\UserModel($this->params);
		$user = $user->create();
		echo json_encode($user);
	}
	public function showAction() {
		// Working on POSTMAN
		$url = substr($_SERVER['REQUEST_URI'], strlen(BASE_URI));
		$id = explode('/', $url)[3];
		$user = new \src\Model\UserModel($id);
		echo json_encode($user);
	}
}
?>
