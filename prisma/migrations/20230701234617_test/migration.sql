-- AlterTable
ALTER TABLE "User" ALTER COLUMN "blob" DROP NOT NULL,
ALTER COLUMN "largeNumber" DROP NOT NULL,
ALTER COLUMN "preferences" DROP NOT NULL;
