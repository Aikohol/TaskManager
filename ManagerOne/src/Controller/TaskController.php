<?php

namespace src\Controller;

class TaskController extends \Core\Controller {

	public function indexAction()
	{
		// Working
		$tasks = new \src\Model\TaskModel($this->params);
		$tasks = $tasks->find();
		echo json_encode($tasks);
	}
	public function addAction()
	{
		// Working
		$this->params['creation_date'] = new \DateTime();
		$task = new \src\Model\TaskModel($this->params);
		$task = $task->create();
		echo json_encode($task);
	}
	public function showAction() {
		// Working
		$url = substr($_SERVER['REQUEST_URI'], strlen(BASE_URI));
		$id = explode('/', $url)[3];
		$task = new \src\Model\TaskModel($id);
		echo json_encode($task);
	}
	public function validateAction() {
		// Working
		$url = substr($_SERVER['REQUEST_URI'], strlen(BASE_URI));
		$id = explode('/', $url)[3];
		$task = new \src\Model\TaskModel($id);
		$task->status = ($task->status == 0) ? 1 : 0;
		$task = $task->update($id);
		echo json_encode($task);
	}
	public function deleteAction() {
		$url = substr($_SERVER['REQUEST_URI'], strlen(BASE_URI));
		$id = explode('/', $url)[3];
		$task = new \src\Model\TaskModel($id);
		$id = $task->id;
		$task->delete();
		echo json_encode($id);
	}
}
?>
