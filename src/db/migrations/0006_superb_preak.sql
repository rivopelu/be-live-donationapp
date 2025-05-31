CREATE TABLE `gifter` (
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
	CONSTRAINT `gifter_id` PRIMARY KEY(`id`),
	CONSTRAINT `gifter_email_unique` UNIQUE(`email`)
);
--> statement-breakpoint
CREATE TABLE `transaction` (
	`id` varchar(255) NOT NULL,
	`active` boolean NOT NULL DEFAULT true,
	`created_date` timestamp NOT NULL DEFAULT (now()),
	`created_by` varchar(256) NOT NULL DEFAULT 'SYSTEM',
	`updated_date` timestamp NOT NULL DEFAULT (now()),
	`updated_by` varchar(256),
	`deleted_by` varchar(256),
	`deleted_date` timestamp DEFAULT (now()),
	`message` varchar(256) NOT NULL,
	`amount` bigint NOT NULL,
	`type` varchar(256) NOT NULL,
	`status` varchar(255),
	`account_id` varchar(255),
	`overlay_entity` varchar(255),
	CONSTRAINT `transaction_id` PRIMARY KEY(`id`),
	CONSTRAINT `transaction_message_unique` UNIQUE(`message`),
	CONSTRAINT `transaction_type_unique` UNIQUE(`type`)
);
--> statement-breakpoint
ALTER TABLE `account` ADD `username` varchar(256);--> statement-breakpoint
ALTER TABLE `transaction` ADD CONSTRAINT `transaction_account_id_account_id_fk` FOREIGN KEY (`account_id`) REFERENCES `account`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `transaction` ADD CONSTRAINT `transaction_overlay_entity_overlay_id_fk` FOREIGN KEY (`overlay_entity`) REFERENCES `overlay`(`id`) ON DELETE no action ON UPDATE no action;