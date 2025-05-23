/*
  Warnings:

  - You are about to drop the `EmpChatCus` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `EmpChatCus` DROP FOREIGN KEY `EmpChatCus_custemerId_fkey`;

-- DropTable
DROP TABLE `EmpChatCus`;

-- CreateTable
CREATE TABLE `chatMessage` (
    `id` VARCHAR(191) NOT NULL,
    `content` VARCHAR(191) NOT NULL,
    `employId` VARCHAR(191) NOT NULL,
    `custemerId` VARCHAR(191) NULL,
    `from` VARCHAR(191) NOT NULL,
    `times` VARCHAR(191) NOT NULL,
    `dates` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `chatMessage` ADD CONSTRAINT `chatMessage_custemerId_fkey` FOREIGN KEY (`custemerId`) REFERENCES `custemer`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
