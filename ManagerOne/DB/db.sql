DROP DATABASE IF EXISTS TaskManager;
CREATE DATABASE TaskManager;

USE TaskManager;

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` int(11) NOT NULL auto_increment,
  `name` varchar(30) NOT NULL,
  `email` varchar(128) NOT NULL,
    PRIMARY KEY(`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

DROP TABLE IF EXISTS `tasks`;

CREATE TABLE `tasks` (
  `id` int(11) NOT NULL auto_increment,
  `user_id` int(11) NOT NULL,
  `titre` varchar(60) NOT NULL,
  `description` varchar(255) NOT NULL,
  `creation_date` date NOT NULL,
  `status` int(11) NOT NULL,
    PRIMARY KEY(`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
