/*
  Warnings:

  - You are about to drop the column `custemerId` on the `EmpChatCus` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `EmpChatCus` DROP FOREIGN KEY `EmpChatCus_custemerId_fkey`;

-- DropIndex
DROP INDEX `EmpChatCus_custemerId_fkey` ON `EmpChatCus`;

-- AlterTable
ALTER TABLE `EmpChatCus` DROP COLUMN `custemerId`;
