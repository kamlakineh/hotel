-- AlterTable
ALTER TABLE `custemer` MODIFY `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- DropIndex
DROP INDEX `custemer_id_key` ON `custemer`;

-- CreateTable
CREATE TABLE `employ` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `role` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `EmpChatCus` (
    `id` VARCHAR(191) NOT NULL,
    `content` VARCHAR(191) NOT NULL,
    `custId` VARCHAR(191) NOT NULL,
    `employId` VARCHAR(191) NULL,
    `custemerId` VARCHAR(191) NULL,
    `from` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `EmpChatCus` ADD CONSTRAINT `EmpChatCus_employId_fkey` FOREIGN KEY (`employId`) REFERENCES `employ`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `EmpChatCus` ADD CONSTRAINT `EmpChatCus_custemerId_fkey` FOREIGN KEY (`custemerId`) REFERENCES `custemer`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
