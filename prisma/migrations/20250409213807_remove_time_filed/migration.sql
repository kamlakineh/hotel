/*
  Warnings:

  - You are about to drop the column `date` on the `EmpChatCus` table. All the data in the column will be lost.
  - You are about to drop the column `time` on the `EmpChatCus` table. All the data in the column will be lost.
  - Added the required column `dates` to the `EmpChatCus` table without a default value. This is not possible if the table is not empty.
  - Added the required column `times` to the `EmpChatCus` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `EmpChatCus` DROP FOREIGN KEY `EmpChatCus_custemerId_fkey`;

-- DropIndex
DROP INDEX `EmpChatCus_custemerId_fkey` ON `EmpChatCus`;

-- AlterTable
ALTER TABLE `EmpChatCus` DROP COLUMN `date`,
    DROP COLUMN `time`,
    ADD COLUMN `dates` VARCHAR(191) NOT NULL,
    ADD COLUMN `times` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `EmpChatCus` ADD CONSTRAINT `EmpChatCus_custemerId_fkey` FOREIGN KEY (`custemerId`) REFERENCES `custemer`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
