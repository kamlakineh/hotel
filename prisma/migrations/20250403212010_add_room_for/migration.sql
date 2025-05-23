/*
  Warnings:

  - Added the required column `roomFor` to the `Entry` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Entry` ADD COLUMN `roomFor` VARCHAR(191) NOT NULL;
