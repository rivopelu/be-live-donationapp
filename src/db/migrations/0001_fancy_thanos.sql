CREATE TABLE `overlay` (
	`id` varchar(255) NOT NULL,
	`active` boolean NOT NULL DEFAULT true,
	`created_date` timestamp NOT NULL DEFAULT (now()),
	`created_by` varchar(256) NOT NULL DEFAULT 'SYSTEM',
	`updated_date` timestamp NOT NULL DEFAULT (now()),
	`updated_by` varchar(256),
	`deleted_by` varchar(256),
	`deleted_date` timestamp DEFAULT (now()),
	`type` varchar(30),
	`account_id` varchar(255),
	CONSTRAINT `overlay_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
ALTER TABLE `overlay` ADD CONSTRAINT `overlay_account_id_account_id_fk` FOREIGN KEY (`account_id`) REFERENCES `account`(`id`) ON DELETE no action ON UPDATE no action;