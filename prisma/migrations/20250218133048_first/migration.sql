-- CreateTable
CREATE TABLE `Employee` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `fullName` VARCHAR(50) NOT NULL,
    `departmentId` BIGINT NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `phone` VARCHAR(255) NULL,
    `password` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `Employee_email_key`(`email`),
    UNIQUE INDEX `Employee_phone_key`(`phone`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Department` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `departmentName` VARCHAR(255) NOT NULL,
    `departmentHeadId` BIGINT NULL,

    UNIQUE INDEX `Department_departmentHeadId_key`(`departmentHeadId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Grn` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `date` DATETIME(3) NOT NULL,
    `supplier` VARCHAR(255) NOT NULL,
    `suppliersInvOtherNo` VARCHAR(255) NOT NULL,
    `storeLocation` VARCHAR(255) NOT NULL,
    `purchaseReqNum` BIGINT NOT NULL,
    `purchaseOrderNum` BIGINT NOT NULL,
    `approvementId` BIGINT NULL,
    `unitMeasurement` ENUM('PCS', 'PK', 'REM', 'LITER', 'PAD', 'OTHER') NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `GrnItem` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `grnId` BIGINT NOT NULL,
    `serNo` BIGINT NOT NULL,
    `description` VARCHAR(255) NOT NULL,
    `unitMeasurement` ENUM('PCS', 'PK', 'REM', 'LITER', 'PAD', 'OTHER') NOT NULL,
    `quaOrdered` BIGINT NOT NULL,
    `quaDelivered` BIGINT NOT NULL,
    `quantityReceived` BIGINT NOT NULL,
    `unitPrice` BIGINT NOT NULL,
    `totalItemPrice` BIGINT NOT NULL,
    `remark` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TotalGrn` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `totalKey` BIGINT NULL,
    `totalPrice` BIGINT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Approvement` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `preparedBy` VARCHAR(255) NOT NULL,
    `checkedById` BIGINT NOT NULL,
    `receivedById` BIGINT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Srn` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `requisitionWorkUnit` VARCHAR(255) NOT NULL,
    `date` DATETIME(3) NOT NULL,
    `approvementId` BIGINT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SrnItem` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `srnId` BIGINT NOT NULL,
    `serialNum` BIGINT NOT NULL,
    `description` VARCHAR(255) NOT NULL,
    `unitMeasurement` ENUM('PCS', 'PK', 'REM', 'LITER', 'PAD', 'OTHER') NOT NULL,
    `quantity` BIGINT NOT NULL,
    `remarks` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Scc` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `item` VARCHAR(255) NOT NULL,
    `locationShelvesNo` VARCHAR(255) NOT NULL,
    `maxStockLevel` BIGINT NOT NULL,
    `minStockLevel` BIGINT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `StockIn` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `quantity` BIGINT NOT NULL,
    `unitPrice` BIGINT NOT NULL,
    `totalPrice` BIGINT NOT NULL,
    `sccId` BIGINT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `StockOut` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `quantity` BIGINT NOT NULL,
    `unitPrice` BIGINT NOT NULL,
    `totalPrice` BIGINT NOT NULL,
    `sccId` BIGINT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `StockBalance` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `quantity` BIGINT NOT NULL,
    `unitPrice` BIGINT NOT NULL,
    `totalPrice` BIGINT NOT NULL,
    `sccId` BIGINT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Siv` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `issuedTo` VARCHAR(255) NOT NULL,
    `date` DATETIME(3) NOT NULL,
    `storeReqNum` BIGINT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SivItem` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `serNum` BIGINT NOT NULL,
    `description` VARCHAR(255) NOT NULL,
    `um` BIGINT NOT NULL,
    `requested` BIGINT NOT NULL,
    `issued` BIGINT NOT NULL,
    `outStock` BIGINT NOT NULL,
    `unitPrice` BIGINT NOT NULL,
    `totalPrice` BIGINT NOT NULL,
    `remark` VARCHAR(255) NOT NULL,
    `ivId` BIGINT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_DepartmentEmployees` (
    `A` BIGINT NOT NULL,
    `B` BIGINT NOT NULL,

    UNIQUE INDEX `_DepartmentEmployees_AB_unique`(`A`, `B`),
    INDEX `_DepartmentEmployees_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Employee` ADD CONSTRAINT `Employee_departmentId_fkey` FOREIGN KEY (`departmentId`) REFERENCES `Department`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Department` ADD CONSTRAINT `Department_departmentHeadId_fkey` FOREIGN KEY (`departmentHeadId`) REFERENCES `Employee`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Grn` ADD CONSTRAINT `Grn_approvementId_fkey` FOREIGN KEY (`approvementId`) REFERENCES `Approvement`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `GrnItem` ADD CONSTRAINT `GrnItem_grnId_fkey` FOREIGN KEY (`grnId`) REFERENCES `Grn`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TotalGrn` ADD CONSTRAINT `TotalGrn_grn_fkey` FOREIGN KEY (`totalKey`) REFERENCES `Grn`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TotalGrn` ADD CONSTRAINT `TotalGrn_srn_fkey` FOREIGN KEY (`totalKey`) REFERENCES `Srn`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Approvement` ADD CONSTRAINT `Approvement_checkedById_fkey` FOREIGN KEY (`checkedById`) REFERENCES `Employee`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Approvement` ADD CONSTRAINT `Approvement_receivedById_fkey` FOREIGN KEY (`receivedById`) REFERENCES `Employee`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Srn` ADD CONSTRAINT `Srn_approvementId_fkey` FOREIGN KEY (`approvementId`) REFERENCES `Approvement`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SrnItem` ADD CONSTRAINT `SrnItem_srnId_fkey` FOREIGN KEY (`srnId`) REFERENCES `Srn`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `StockIn` ADD CONSTRAINT `StockIn_sccId_fkey` FOREIGN KEY (`sccId`) REFERENCES `Scc`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `StockOut` ADD CONSTRAINT `StockOut_sccId_fkey` FOREIGN KEY (`sccId`) REFERENCES `Scc`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `StockBalance` ADD CONSTRAINT `StockBalance_sccId_fkey` FOREIGN KEY (`sccId`) REFERENCES `Scc`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SivItem` ADD CONSTRAINT `SivItem_ivId_fkey` FOREIGN KEY (`ivId`) REFERENCES `Siv`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_DepartmentEmployees` ADD CONSTRAINT `_DepartmentEmployees_A_fkey` FOREIGN KEY (`A`) REFERENCES `Department`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_DepartmentEmployees` ADD CONSTRAINT `_DepartmentEmployees_B_fkey` FOREIGN KEY (`B`) REFERENCES `Employee`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
