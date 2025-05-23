-- CreateTable
CREATE TABLE `custemer` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fName` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `coutery` VARCHAR(191) NOT NULL,
    `numbers` VARCHAR(191) NOT NULL,
    `numFamily` VARCHAR(191) NOT NULL,
    `checkIn` VARCHAR(191) NOT NULL,
    `checkOut` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `custemer_id_key`(`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
