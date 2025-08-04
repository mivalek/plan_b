/*
  Warnings:

  - Changed the type of `segmentName` on the `Boulder` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `name` on the `Segment` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `room` on the `Segment` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "public"."room" AS ENUM ('BIG', 'SMALL');

-- CreateEnum
CREATE TYPE "public"."segment" AS ENUM ('LARGE_BLOCK', 'SMALL_BLOCK', 'CAVE', 'SLAB', 'BLOCK', 'U_WALL', 'CORNER');

-- DropForeignKey
ALTER TABLE "public"."Boulder" DROP CONSTRAINT "Boulder_segmentName_fkey";

-- AlterTable
ALTER TABLE "public"."Boulder" DROP COLUMN "segmentName",
ADD COLUMN     "segmentName" "public"."segment" NOT NULL;

-- AlterTable
ALTER TABLE "public"."Segment" DROP COLUMN "name",
ADD COLUMN     "name" "public"."segment" NOT NULL,
DROP COLUMN "room",
ADD COLUMN     "room" "public"."room" NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Segment_name_key" ON "public"."Segment"("name");

-- AddForeignKey
ALTER TABLE "public"."Boulder" ADD CONSTRAINT "Boulder_segmentName_fkey" FOREIGN KEY ("segmentName") REFERENCES "public"."Segment"("name") ON DELETE RESTRICT ON UPDATE CASCADE;
