ALTER TABLE `overlay` MODIFY COLUMN `type` varchar(35) NOT NULL;--> statement-breakpoint
ALTER TABLE `overlay` ADD `background_color` varchar(255);--> statement-breakpoint
ALTER TABLE `overlay` ADD `text_color` varchar(255);--> statement-breakpoint
ALTER TABLE `overlay` ADD `highlight_color` varchar(255);