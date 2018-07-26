<?php

namespace Core;

class Request {
	public $params = [];
	public function getParams() {

		header('Access-Control-Allow-Origin: *');
		header('Content-Type: application/json');
		header('Access-Control-Allow-Methods: POST');
		header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');
		$data = json_decode(file_get_contents("php://input"));
		if(isset($data))
		{
			foreach($data as $key => $value)
			{
				$this->params[$key] = stripslashes($value);
				$this->params[$key] = htmlentities($value);
				$this->params[$key] = strip_tags($value);
				$this->params[$key] = htmlspecialchars($value, ENT_QUOTES, 'UTF-8');
				$this->params[$key] = trim($value);
			}
		}
		return $this->params;
	}
}

?>
