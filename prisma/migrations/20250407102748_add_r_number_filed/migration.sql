/*
  Warnings:

  - Added the required column `rNumber` to the `custemer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `custemer` ADD COLUMN `rNumber` VARCHAR(191) NOT NULL;
