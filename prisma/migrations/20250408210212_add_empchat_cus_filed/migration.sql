-- AlterTable
ALTER TABLE `EmpChatCus` ADD COLUMN `custemerId` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `EmpChatCus` ADD CONSTRAINT `EmpChatCus_custemerId_fkey` FOREIGN KEY (`custemerId`) REFERENCES `custemer`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
