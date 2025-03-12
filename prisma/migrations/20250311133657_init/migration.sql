/*
  Warnings:

  - Made the column `role_id` on table `Employee` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `Employee` DROP FOREIGN KEY `Employee_role_id_fkey`;

-- AlterTable
ALTER TABLE `Employee` MODIFY `role_id` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Employee` ADD CONSTRAINT `Employee_role_id_fkey` FOREIGN KEY (`role_id`) REFERENCES `Role`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
