/*
  Warnings:

  - You are about to drop the column `custId` on the `EmpChatCus` table. All the data in the column will be lost.
  - You are about to drop the `employ` table. If the table is not empty, all the data it contains will be lost.
  - Made the column `employId` on table `EmpChatCus` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `EmpChatCus` DROP FOREIGN KEY `EmpChatCus_employId_fkey`;

-- DropIndex
DROP INDEX `EmpChatCus_employId_fkey` ON `EmpChatCus`;

-- AlterTable
ALTER TABLE `EmpChatCus` DROP COLUMN `custId`,
    MODIFY `employId` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `employ`;
