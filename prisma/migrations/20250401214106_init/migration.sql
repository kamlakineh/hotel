-- CreateTable
CREATE TABLE `Entry` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `roomNumber` VARCHAR(191) NOT NULL,
    `roomType` VARCHAR(191) NOT NULL,
    `roomDetail` VARCHAR(191) NOT NULL,
    `roomPrice` DOUBLE NOT NULL,
    `roomImage1` VARCHAR(191) NOT NULL,
    `roomImage2` VARCHAR(191) NOT NULL,
    `roomImage3` VARCHAR(191) NOT NULL,
    `roomFloor` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
