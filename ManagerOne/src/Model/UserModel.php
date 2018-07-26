<?php
namespace src\Model;

class UserModel extends \Core\Entity {
	protected $table = 'users';
	private static $relations = ['hasMany' => ['tasks']];

	public function getRelations()
	{
		return self::$relations;
	}

}
