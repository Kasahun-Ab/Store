/*
  Warnings:

  - You are about to alter the column `preparedBy` on the `approvement` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(191)`.
  - You are about to drop the column `departmentName` on the `department` table. All the data in the column will be lost.
  - You are about to drop the column `fullName` on the `employee` table. All the data in the column will be lost.
  - You are about to alter the column `email` on the `employee` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(191)`.
  - You are about to alter the column `phone` on the `employee` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(191)`.
  - You are about to alter the column `password` on the `employee` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(191)`.
  - You are about to drop the column `purchaseOrderNum` on the `grn` table. All the data in the column will be lost.
  - You are about to drop the column `purchaseReqNum` on the `grn` table. All the data in the column will be lost.
  - You are about to drop the column `storeLocation` on the `grn` table. All the data in the column will be lost.
  - You are about to drop the column `suppliersInvOtherNo` on the `grn` table. All the data in the column will be lost.
  - You are about to drop the column `unitMeasurement` on the `grn` table. All the data in the column will be lost.
  - You are about to alter the column `supplier` on the `grn` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(191)`.
  - You are about to drop the column `quaDelivered` on the `grnitem` table. All the data in the column will be lost.
  - You are about to drop the column `quaOrdered` on the `grnitem` table. All the data in the column will be lost.
  - You are about to drop the column `quantityReceived` on the `grnitem` table. All the data in the column will be lost.
  - You are about to drop the column `serNo` on the `grnitem` table. All the data in the column will be lost.
  - You are about to drop the column `totalItemPrice` on the `grnitem` table. All the data in the column will be lost.
  - You are about to drop the column `unitMeasurement` on the `grnitem` table. All the data in the column will be lost.
  - You are about to alter the column `description` on the `grnitem` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(191)`.
  - You are about to alter the column `remark` on the `grnitem` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(191)`.
  - You are about to drop the column `locationShelvesNo` on the `scc` table. All the data in the column will be lost.
  - You are about to drop the column `maxStockLevel` on the `scc` table. All the data in the column will be lost.
  - You are about to drop the column `minStockLevel` on the `scc` table. All the data in the column will be lost.
  - You are about to alter the column `item` on the `scc` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(191)`.
  - You are about to drop the column `issuedTo` on the `siv` table. All the data in the column will be lost.
  - You are about to drop the column `storeReqNum` on the `siv` table. All the data in the column will be lost.
  - You are about to drop the column `ivId` on the `sivitem` table. All the data in the column will be lost.
  - You are about to drop the column `serNum` on the `sivitem` table. All the data in the column will be lost.
  - You are about to drop the column `totalPrice` on the `sivitem` table. All the data in the column will be lost.
  - You are about to alter the column `description` on the `sivitem` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(191)`.
  - You are about to alter the column `remark` on the `sivitem` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(191)`.
  - You are about to drop the column `requisitionWorkUnit` on the `srn` table. All the data in the column will be lost.
  - You are about to drop the column `serialNum` on the `srnitem` table. All the data in the column will be lost.
  - You are about to drop the column `unitMeasurement` on the `srnitem` table. All the data in the column will be lost.
  - You are about to alter the column `description` on the `srnitem` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(191)`.
  - You are about to alter the column `remarks` on the `srnitem` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(191)`.
  - You are about to drop the column `totalKey` on the `totalgrn` table. All the data in the column will be lost.
  - You are about to drop the column `totalPrice` on the `totalgrn` table. All the data in the column will be lost.
  - You are about to drop the `_departmentemployees` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `department_name` to the `Department` table without a default value. This is not possible if the table is not empty.
  - Added the required column `full_name` to the `Employee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `purchase_order_num` to the `GRN` table without a default value. This is not possible if the table is not empty.
  - Added the required column `purchase_req_num` to the `GRN` table without a default value. This is not possible if the table is not empty.
  - Added the required column `store_location` to the `GRN` table without a default value. This is not possible if the table is not empty.
  - Added the required column `suppliers_inv_other_no` to the `GRN` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantity_delivered` to the `GRNItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantity_ordered` to the `GRNItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantity_received` to the `GRNItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ser_no` to the `GRNItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `total_item_price` to the `GRNItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `unit_measurement` to the `GRNItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `location_shelves_no` to the `SCC` table without a default value. This is not possible if the table is not empty.
  - Added the required column `max_stock_level` to the `SCC` table without a default value. This is not possible if the table is not empty.
  - Added the required column `min_stock_level` to the `SCC` table without a default value. This is not possible if the table is not empty.
  - Added the required column `issued_to` to the `SIV` table without a default value. This is not possible if the table is not empty.
  - Added the required column `store_req_num` to the `SIV` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ser_num` to the `SIVItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sivId` to the `SIVItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `total_price` to the `SIVItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `requisition_work_unit` to the `SRN` table without a default value. This is not possible if the table is not empty.
  - Added the required column `serial_num` to the `SRNItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `unit_measurement` to the `SRNItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `grnId` to the `TotalGRN` table without a default value. This is not possible if the table is not empty.
  - Added the required column `total_price` to the `TotalGRN` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `_departmentemployees` DROP FOREIGN KEY `_DepartmentEmployees_A_fkey`;

-- DropForeignKey
ALTER TABLE `_departmentemployees` DROP FOREIGN KEY `_DepartmentEmployees_B_fkey`;

-- DropForeignKey
ALTER TABLE `grn` DROP FOREIGN KEY `Grn_approvementId_fkey`;

-- DropForeignKey
ALTER TABLE `grnitem` DROP FOREIGN KEY `GrnItem_grnId_fkey`;

-- DropForeignKey
ALTER TABLE `sivitem` DROP FOREIGN KEY `SivItem_ivId_fkey`;

-- DropForeignKey
ALTER TABLE `srn` DROP FOREIGN KEY `Srn_approvementId_fkey`;

-- DropForeignKey
ALTER TABLE `srnitem` DROP FOREIGN KEY `SrnItem_srnId_fkey`;

-- DropForeignKey
ALTER TABLE `totalgrn` DROP FOREIGN KEY `TotalGrn_grn_fkey`;

-- DropForeignKey
ALTER TABLE `totalgrn` DROP FOREIGN KEY `TotalGrn_srn_fkey`;

-- DropIndex
DROP INDEX `SivItem_ivId_fkey` ON `sivitem`;

-- DropIndex
DROP INDEX `TotalGrn_srn_fkey` ON `totalgrn`;

-- AlterTable
ALTER TABLE `approvement` MODIFY `preparedBy` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `department` DROP COLUMN `departmentName`,
    ADD COLUMN `department_name` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `employee` DROP COLUMN `fullName`,
    ADD COLUMN `full_name` VARCHAR(191) NOT NULL,
    MODIFY `email` VARCHAR(191) NOT NULL,
    MODIFY `phone` VARCHAR(191) NULL,
    MODIFY `password` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `grn` DROP COLUMN `purchaseOrderNum`,
    DROP COLUMN `purchaseReqNum`,
    DROP COLUMN `storeLocation`,
    DROP COLUMN `suppliersInvOtherNo`,
    DROP COLUMN `unitMeasurement`,
    ADD COLUMN `purchase_order_num` BIGINT NOT NULL,
    ADD COLUMN `purchase_req_num` BIGINT NOT NULL,
    ADD COLUMN `store_location` VARCHAR(191) NOT NULL,
    ADD COLUMN `suppliers_inv_other_no` VARCHAR(191) NOT NULL,
    MODIFY `supplier` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `grnitem` DROP COLUMN `quaDelivered`,
    DROP COLUMN `quaOrdered`,
    DROP COLUMN `quantityReceived`,
    DROP COLUMN `serNo`,
    DROP COLUMN `totalItemPrice`,
    DROP COLUMN `unitMeasurement`,
    ADD COLUMN `quantity_delivered` BIGINT NOT NULL,
    ADD COLUMN `quantity_ordered` BIGINT NOT NULL,
    ADD COLUMN `quantity_received` BIGINT NOT NULL,
    ADD COLUMN `ser_no` BIGINT NOT NULL,
    ADD COLUMN `total_item_price` BIGINT NOT NULL,
    ADD COLUMN `unit_measurement` ENUM('PCS', 'PK', 'REM', 'LITER', 'PAD', 'OTHER') NOT NULL,
    MODIFY `description` VARCHAR(191) NOT NULL,
    MODIFY `remark` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `scc` DROP COLUMN `locationShelvesNo`,
    DROP COLUMN `maxStockLevel`,
    DROP COLUMN `minStockLevel`,
    ADD COLUMN `location_shelves_no` VARCHAR(191) NOT NULL,
    ADD COLUMN `max_stock_level` BIGINT NOT NULL,
    ADD COLUMN `min_stock_level` BIGINT NOT NULL,
    MODIFY `item` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `siv` DROP COLUMN `issuedTo`,
    DROP COLUMN `storeReqNum`,
    ADD COLUMN `issued_to` VARCHAR(191) NOT NULL,
    ADD COLUMN `store_req_num` BIGINT NOT NULL;

-- AlterTable
ALTER TABLE `sivitem` DROP COLUMN `ivId`,
    DROP COLUMN `serNum`,
    DROP COLUMN `totalPrice`,
    ADD COLUMN `ser_num` BIGINT NOT NULL,
    ADD COLUMN `sivId` BIGINT NOT NULL,
    ADD COLUMN `total_price` BIGINT NOT NULL,
    MODIFY `description` VARCHAR(191) NOT NULL,
    MODIFY `remark` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `srn` DROP COLUMN `requisitionWorkUnit`,
    ADD COLUMN `requisition_work_unit` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `srnitem` DROP COLUMN `serialNum`,
    DROP COLUMN `unitMeasurement`,
    ADD COLUMN `serial_num` BIGINT NOT NULL,
    ADD COLUMN `unit_measurement` ENUM('PCS', 'PK', 'REM', 'LITER', 'PAD', 'OTHER') NOT NULL,
    MODIFY `description` VARCHAR(191) NOT NULL,
    MODIFY `remarks` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `totalgrn` DROP COLUMN `totalKey`,
    DROP COLUMN `totalPrice`,
    ADD COLUMN `grnId` BIGINT NOT NULL,
    ADD COLUMN `total_price` BIGINT NOT NULL;

-- DropTable
DROP TABLE `_departmentemployees`;

-- CreateTable
CREATE TABLE `ReferenceSCC` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `sccId` BIGINT NOT NULL,
    `date` DATETIME(3) NOT NULL,
    `grnId` BIGINT NOT NULL,
    `ivKey` BIGINT NOT NULL,
    `unit_measurement` ENUM('PCS', 'PK', 'REM', 'LITER', 'PAD', 'OTHER') NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `GRN` ADD CONSTRAINT `GRN_approvementId_fkey` FOREIGN KEY (`approvementId`) REFERENCES `Approvement`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `GRNItem` ADD CONSTRAINT `GRNItem_grnId_fkey` FOREIGN KEY (`grnId`) REFERENCES `GRN`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TotalGRN` ADD CONSTRAINT `TotalGRN_grnId_fkey` FOREIGN KEY (`grnId`) REFERENCES `GRN`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SRN` ADD CONSTRAINT `SRN_approvementId_fkey` FOREIGN KEY (`approvementId`) REFERENCES `Approvement`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SRNItem` ADD CONSTRAINT `SRNItem_srnId_fkey` FOREIGN KEY (`srnId`) REFERENCES `SRN`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ReferenceSCC` ADD CONSTRAINT `ReferenceSCC_sccId_fkey` FOREIGN KEY (`sccId`) REFERENCES `SCC`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ReferenceSCC` ADD CONSTRAINT `ReferenceSCC_grnId_fkey` FOREIGN KEY (`grnId`) REFERENCES `GRN`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SIVItem` ADD CONSTRAINT `SIVItem_sivId_fkey` FOREIGN KEY (`sivId`) REFERENCES `SIV`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
