/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `Entry` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `Entry` ADD COLUMN `tack` BOOLEAN NOT NULL DEFAULT false;

-- CreateIndex
CREATE UNIQUE INDEX `Entry_id_key` ON `Entry`(`id`);
