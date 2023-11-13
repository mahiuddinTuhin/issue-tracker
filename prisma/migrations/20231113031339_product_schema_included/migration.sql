/*
  Warnings:

  - You are about to drop the column `description` on the `product` table. All the data in the column will be lost.
  - You are about to drop the column `isAvailable` on the `product` table. All the data in the column will be lost.
  - You are about to drop the column `quantity` on the `product` table. All the data in the column will be lost.
  - You are about to drop the column `registeredAt` on the `product` table. All the data in the column will be lost.
  - You are about to drop the column `sold` on the `product` table. All the data in the column will be lost.
  - Added the required column `price` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `product` DROP COLUMN `description`,
    DROP COLUMN `isAvailable`,
    DROP COLUMN `quantity`,
    DROP COLUMN `registeredAt`,
    DROP COLUMN `sold`,
    ADD COLUMN `price` DOUBLE NOT NULL;
