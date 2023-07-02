/*
  Warnings:

  - You are about to drop the column `UserPreferenceId` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userPreferenceId]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_UserPreferenceId_fkey";

-- DropIndex
DROP INDEX "User_UserPreferenceId_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "UserPreferenceId",
ADD COLUMN     "userPreferenceId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "User_userPreferenceId_key" ON "User"("userPreferenceId");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_userPreferenceId_fkey" FOREIGN KEY ("userPreferenceId") REFERENCES "UserPreferences"("id") ON DELETE SET NULL ON UPDATE CASCADE;
