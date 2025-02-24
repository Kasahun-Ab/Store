/*
  Warnings:

  - The primary key for the `approvement` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `approvement` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `checkedById` on the `approvement` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `receivedById` on the `approvement` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - The primary key for the `department` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `department` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `departmentHeadId` on the `department` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - The primary key for the `employee` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `employee` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `departmentId` on the `employee` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - The primary key for the `grn` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `grn` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `approvementId` on the `grn` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `purchase_order_num` on the `grn` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `purchase_req_num` on the `grn` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - The primary key for the `grnitem` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `grnitem` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `grnId` on the `grnitem` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `unitPrice` on the `grnitem` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `quantity_delivered` on the `grnitem` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `quantity_ordered` on the `grnitem` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `quantity_received` on the `grnitem` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `ser_no` on the `grnitem` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `total_item_price` on the `grnitem` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - The primary key for the `referencescc` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `referencescc` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `sccId` on the `referencescc` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `grnId` on the `referencescc` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `ivKey` on the `referencescc` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - The primary key for the `scc` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `scc` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `max_stock_level` on the `scc` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `min_stock_level` on the `scc` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - The primary key for the `siv` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `siv` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `store_req_num` on the `siv` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - The primary key for the `sivitem` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `sivitem` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `um` on the `sivitem` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `requested` on the `sivitem` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `issued` on the `sivitem` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `outStock` on the `sivitem` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `unitPrice` on the `sivitem` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `ser_num` on the `sivitem` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `sivId` on the `sivitem` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `total_price` on the `sivitem` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - The primary key for the `srn` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `srn` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `approvementId` on the `srn` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - The primary key for the `srnitem` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `srnitem` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `srnId` on the `srnitem` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `quantity` on the `srnitem` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `serial_num` on the `srnitem` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - The primary key for the `stockbalance` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `stockbalance` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `quantity` on the `stockbalance` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `unitPrice` on the `stockbalance` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `totalPrice` on the `stockbalance` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `sccId` on the `stockbalance` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - The primary key for the `stockin` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `stockin` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `quantity` on the `stockin` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `unitPrice` on the `stockin` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `totalPrice` on the `stockin` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `sccId` on the `stockin` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - The primary key for the `stockout` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `stockout` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `quantity` on the `stockout` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `unitPrice` on the `stockout` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `totalPrice` on the `stockout` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `sccId` on the `stockout` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - The primary key for the `totalgrn` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `totalgrn` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `grnId` on the `totalgrn` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `total_price` on the `totalgrn` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.

*/
-- DropForeignKey
ALTER TABLE `approvement` DROP FOREIGN KEY `Approvement_checkedById_fkey`;

-- DropForeignKey
ALTER TABLE `approvement` DROP FOREIGN KEY `Approvement_receivedById_fkey`;

-- DropForeignKey
ALTER TABLE `department` DROP FOREIGN KEY `Department_departmentHeadId_fkey`;

-- DropForeignKey
ALTER TABLE `employee` DROP FOREIGN KEY `Employee_departmentId_fkey`;

-- DropForeignKey
ALTER TABLE `grn` DROP FOREIGN KEY `GRN_approvementId_fkey`;

-- DropForeignKey
ALTER TABLE `grnitem` DROP FOREIGN KEY `GRNItem_grnId_fkey`;

-- DropForeignKey
ALTER TABLE `referencescc` DROP FOREIGN KEY `ReferenceSCC_grnId_fkey`;

-- DropForeignKey
ALTER TABLE `referencescc` DROP FOREIGN KEY `ReferenceSCC_sccId_fkey`;

-- DropForeignKey
ALTER TABLE `sivitem` DROP FOREIGN KEY `SIVItem_sivId_fkey`;

-- DropForeignKey
ALTER TABLE `srn` DROP FOREIGN KEY `SRN_approvementId_fkey`;

-- DropForeignKey
ALTER TABLE `srnitem` DROP FOREIGN KEY `SRNItem_srnId_fkey`;

-- DropForeignKey
ALTER TABLE `stockbalance` DROP FOREIGN KEY `StockBalance_sccId_fkey`;

-- DropForeignKey
ALTER TABLE `stockin` DROP FOREIGN KEY `StockIn_sccId_fkey`;

-- DropForeignKey
ALTER TABLE `stockout` DROP FOREIGN KEY `StockOut_sccId_fkey`;

-- DropForeignKey
ALTER TABLE `totalgrn` DROP FOREIGN KEY `TotalGRN_grnId_fkey`;

-- DropIndex
DROP INDEX `Approvement_checkedById_fkey` ON `approvement`;

-- DropIndex
DROP INDEX `Approvement_receivedById_fkey` ON `approvement`;

-- DropIndex
DROP INDEX `Employee_departmentId_fkey` ON `employee`;

-- DropIndex
DROP INDEX `GRN_approvementId_fkey` ON `grn`;

-- DropIndex
DROP INDEX `GRNItem_grnId_fkey` ON `grnitem`;

-- DropIndex
DROP INDEX `ReferenceSCC_grnId_fkey` ON `referencescc`;

-- DropIndex
DROP INDEX `ReferenceSCC_sccId_fkey` ON `referencescc`;

-- DropIndex
DROP INDEX `SIVItem_sivId_fkey` ON `sivitem`;

-- DropIndex
DROP INDEX `SRN_approvementId_fkey` ON `srn`;

-- DropIndex
DROP INDEX `SRNItem_srnId_fkey` ON `srnitem`;

-- DropIndex
DROP INDEX `StockBalance_sccId_fkey` ON `stockbalance`;

-- DropIndex
DROP INDEX `StockIn_sccId_fkey` ON `stockin`;

-- DropIndex
DROP INDEX `StockOut_sccId_fkey` ON `stockout`;

-- DropIndex
DROP INDEX `TotalGRN_grnId_fkey` ON `totalgrn`;

-- AlterTable
ALTER TABLE `approvement` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `checkedById` INTEGER NOT NULL,
    MODIFY `receivedById` INTEGER NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `department` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `departmentHeadId` INTEGER NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `employee` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `departmentId` INTEGER NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `grn` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `approvementId` INTEGER NULL,
    MODIFY `purchase_order_num` INTEGER NOT NULL,
    MODIFY `purchase_req_num` INTEGER NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `grnitem` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `grnId` INTEGER NOT NULL,
    MODIFY `unitPrice` INTEGER NOT NULL,
    MODIFY `quantity_delivered` INTEGER NOT NULL,
    MODIFY `quantity_ordered` INTEGER NOT NULL,
    MODIFY `quantity_received` INTEGER NOT NULL,
    MODIFY `ser_no` INTEGER NOT NULL,
    MODIFY `total_item_price` INTEGER NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `referencescc` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `sccId` INTEGER NOT NULL,
    MODIFY `grnId` INTEGER NOT NULL,
    MODIFY `ivKey` INTEGER NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `scc` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `max_stock_level` INTEGER NOT NULL,
    MODIFY `min_stock_level` INTEGER NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `siv` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `store_req_num` INTEGER NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `sivitem` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `um` INTEGER NOT NULL,
    MODIFY `requested` INTEGER NOT NULL,
    MODIFY `issued` INTEGER NOT NULL,
    MODIFY `outStock` INTEGER NOT NULL,
    MODIFY `unitPrice` INTEGER NOT NULL,
    MODIFY `ser_num` INTEGER NOT NULL,
    MODIFY `sivId` INTEGER NOT NULL,
    MODIFY `total_price` INTEGER NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `srn` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `approvementId` INTEGER NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `srnitem` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `srnId` INTEGER NOT NULL,
    MODIFY `quantity` INTEGER NOT NULL,
    MODIFY `serial_num` INTEGER NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `stockbalance` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `quantity` INTEGER NOT NULL,
    MODIFY `unitPrice` INTEGER NOT NULL,
    MODIFY `totalPrice` INTEGER NOT NULL,
    MODIFY `sccId` INTEGER NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `stockin` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `quantity` INTEGER NOT NULL,
    MODIFY `unitPrice` INTEGER NOT NULL,
    MODIFY `totalPrice` INTEGER NOT NULL,
    MODIFY `sccId` INTEGER NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `stockout` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `quantity` INTEGER NOT NULL,
    MODIFY `unitPrice` INTEGER NOT NULL,
    MODIFY `totalPrice` INTEGER NOT NULL,
    MODIFY `sccId` INTEGER NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `totalgrn` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `grnId` INTEGER NOT NULL,
    MODIFY `total_price` INTEGER NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AddForeignKey
ALTER TABLE `Employee` ADD CONSTRAINT `Employee_departmentId_fkey` FOREIGN KEY (`departmentId`) REFERENCES `Department`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Department` ADD CONSTRAINT `Department_departmentHeadId_fkey` FOREIGN KEY (`departmentHeadId`) REFERENCES `Employee`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `GRN` ADD CONSTRAINT `GRN_approvementId_fkey` FOREIGN KEY (`approvementId`) REFERENCES `Approvement`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `GRNItem` ADD CONSTRAINT `GRNItem_grnId_fkey` FOREIGN KEY (`grnId`) REFERENCES `GRN`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TotalGRN` ADD CONSTRAINT `TotalGRN_grnId_fkey` FOREIGN KEY (`grnId`) REFERENCES `GRN`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Approvement` ADD CONSTRAINT `Approvement_checkedById_fkey` FOREIGN KEY (`checkedById`) REFERENCES `Employee`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Approvement` ADD CONSTRAINT `Approvement_receivedById_fkey` FOREIGN KEY (`receivedById`) REFERENCES `Employee`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SRN` ADD CONSTRAINT `SRN_approvementId_fkey` FOREIGN KEY (`approvementId`) REFERENCES `Approvement`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SRNItem` ADD CONSTRAINT `SRNItem_srnId_fkey` FOREIGN KEY (`srnId`) REFERENCES `SRN`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ReferenceSCC` ADD CONSTRAINT `ReferenceSCC_sccId_fkey` FOREIGN KEY (`sccId`) REFERENCES `SCC`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ReferenceSCC` ADD CONSTRAINT `ReferenceSCC_grnId_fkey` FOREIGN KEY (`grnId`) REFERENCES `GRN`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `StockIn` ADD CONSTRAINT `StockIn_sccId_fkey` FOREIGN KEY (`sccId`) REFERENCES `SCC`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `StockOut` ADD CONSTRAINT `StockOut_sccId_fkey` FOREIGN KEY (`sccId`) REFERENCES `SCC`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `StockBalance` ADD CONSTRAINT `StockBalance_sccId_fkey` FOREIGN KEY (`sccId`) REFERENCES `SCC`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SIVItem` ADD CONSTRAINT `SIVItem_sivId_fkey` FOREIGN KEY (`sivId`) REFERENCES `SIV`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
