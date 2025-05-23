-- DropForeignKey
ALTER TABLE `EmpChatCus` DROP FOREIGN KEY `EmpChatCus_custemerId_fkey`;

-- DropIndex
DROP INDEX `EmpChatCus_custemerId_fkey` ON `EmpChatCus`;

-- AddForeignKey
ALTER TABLE `EmpChatCus` ADD CONSTRAINT `EmpChatCus_custemerId_fkey` FOREIGN KEY (`custemerId`) REFERENCES `custemer`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
