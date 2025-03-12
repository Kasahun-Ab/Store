/*
  Warnings:

  - You are about to drop the column `item_key` on the `StoreIssueVoucher` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[store_issue_key]` on the table `StoreIssueVoucherItem` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `remark` to the `StoreIssueVoucherItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `store_issue_key` to the `StoreIssueVoucherItem` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `StoreIssueVoucher` DROP FOREIGN KEY `StoreIssueVoucher_item_key_fkey`;

-- DropIndex
DROP INDEX `StoreIssueVoucher_item_key_fkey` ON `StoreIssueVoucher`;

-- AlterTable
ALTER TABLE `StoreIssueVoucher` DROP COLUMN `item_key`;

-- AlterTable
ALTER TABLE `StoreIssueVoucherItem` ADD COLUMN `remark` VARCHAR(191) NOT NULL,
    ADD COLUMN `store_issue_key` INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `StoreIssueVoucherItem_store_issue_key_key` ON `StoreIssueVoucherItem`(`store_issue_key`);

-- AddForeignKey
ALTER TABLE `StoreIssueVoucherItem` ADD CONSTRAINT `StoreIssueVoucherItem_store_issue_key_fkey` FOREIGN KEY (`store_issue_key`) REFERENCES `StoreIssueVoucher`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
