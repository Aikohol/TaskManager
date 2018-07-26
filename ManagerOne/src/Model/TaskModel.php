<?php
namespace src\Model;

class TaskModel extends \Core\Entity {
	protected $table = 'tasks';
	private static $relations = ['hasOne' => ['users']];

	public function getRelations()
	{
		return self::$relations;
	}

}
