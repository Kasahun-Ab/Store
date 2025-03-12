/*
  Warnings:

  - A unique constraint covering the columns `[role_id]` on the table `Employee` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `Employee` DROP FOREIGN KEY `Employee_role_id_fkey`;

-- DropIndex
DROP INDEX `Employee_role_id_fkey` ON `Employee`;

-- AlterTable
ALTER TABLE `Employee` MODIFY `role_id` INTEGER NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Employee_role_id_key` ON `Employee`(`role_id`);

-- AddForeignKey
ALTER TABLE `Employee` ADD CONSTRAINT `Employee_role_id_fkey` FOREIGN KEY (`role_id`) REFERENCES `Role`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
