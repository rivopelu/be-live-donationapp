CREATE TABLE `account` (
	`id` varchar(255) NOT NULL,
	`active` boolean NOT NULL DEFAULT true,
	`created_date` timestamp NOT NULL DEFAULT (now()),
	`created_by` varchar(256) NOT NULL DEFAULT 'SYSTEM',
	`updated_date` timestamp NOT NULL DEFAULT (now()),
	`updated_by` varchar(256),
	`deleted_by` varchar(256),
	`deleted_date` timestamp DEFAULT (now()),
	`name` varchar(256) NOT NULL,
	`email` varchar(256) NOT NULL,
	`password` varchar(1000) NOT NULL,
	`profile picture` varchar(1000),
	CONSTRAINT `account_id` PRIMARY KEY(`id`),
	CONSTRAINT `account_email_unique` UNIQUE(`email`)
);
