ALTER TABLE `transaction` DROP INDEX `transaction_message_unique`;--> statement-breakpoint
ALTER TABLE `transaction` ADD `gifter_id` varchar(40);--> statement-breakpoint
ALTER TABLE `transaction` ADD CONSTRAINT `transaction_gifter_id_gifter_id_fk` FOREIGN KEY (`gifter_id`) REFERENCES `gifter`(`id`) ON DELETE no action ON UPDATE no action;