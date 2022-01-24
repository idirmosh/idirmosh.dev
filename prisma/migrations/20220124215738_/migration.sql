/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `Applause` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Applause_slug_key" ON "Applause"("slug");
