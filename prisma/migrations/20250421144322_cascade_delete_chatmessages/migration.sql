-- DropForeignKey
ALTER TABLE `chatMessage` DROP FOREIGN KEY `chatMessage_custemerId_fkey`;

-- DropIndex
DROP INDEX `chatMessage_custemerId_fkey` ON `chatMessage`;

-- AddForeignKey
ALTER TABLE `chatMessage` ADD CONSTRAINT `chatMessage_custemerId_fkey` FOREIGN KEY (`custemerId`) REFERENCES `custemer`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
