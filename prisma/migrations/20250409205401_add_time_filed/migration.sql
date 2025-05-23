/*
  Warnings:

  - Added the required column `data` to the `EmpChatCus` table without a default value. This is not possible if the table is not empty.
  - Added the required column `time` to the `EmpChatCus` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `EmpChatCus` ADD COLUMN `data` VARCHAR(191) NOT NULL,
    ADD COLUMN `time` VARCHAR(191) NOT NULL;
