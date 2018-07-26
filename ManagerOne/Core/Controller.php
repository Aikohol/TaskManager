<?php

namespace Core;

class Controller {
	protected $params;

	public function __construct()
	{
		$request = new Request();
		return $this->params = $request->getParams();
	}
}
?>
