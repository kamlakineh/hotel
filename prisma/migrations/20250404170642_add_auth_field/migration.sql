/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Profileadmin` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `Profileadmin` ADD COLUMN `auth` BOOLEAN NOT NULL DEFAULT false,
    ADD PRIMARY KEY (`id`);

-- DropIndex
DROP INDEX `Profileadmin_id_key` ON `Profileadmin`;

-- CreateIndex
CREATE UNIQUE INDEX `Profileadmin_email_key` ON `Profileadmin`(`email`);
