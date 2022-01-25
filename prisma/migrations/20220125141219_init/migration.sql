-- CreateTable
CREATE TABLE `Applause` (
    `id` VARCHAR(191) NOT NULL,
    `slug` VARCHAR(191) NOT NULL,
    `value` INTEGER NOT NULL,

    UNIQUE INDEX `Applause_slug_key`(`slug`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
