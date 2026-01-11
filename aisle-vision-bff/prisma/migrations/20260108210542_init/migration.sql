-- CreateEnum
CREATE TYPE "NegotiationType" AS ENUM ('EXCLUSIVO', 'NAO_EXCLUSIVO', 'ACORDO');

-- CreateTable
CREATE TABLE "Contact" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "neighborhood" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "negotiation" "NegotiationType" NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Contact_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Collection" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Collection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CollectionToContact" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_CollectionToContact_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "Contact_code_key" ON "Contact"("code");

-- CreateIndex
CREATE INDEX "Contact_state_city_neighborhood_idx" ON "Contact"("state", "city", "neighborhood");

-- CreateIndex
CREATE INDEX "Contact_negotiation_idx" ON "Contact"("negotiation");

-- CreateIndex
CREATE UNIQUE INDEX "Collection_name_key" ON "Collection"("name");

-- CreateIndex
CREATE INDEX "_CollectionToContact_B_index" ON "_CollectionToContact"("B");

-- AddForeignKey
ALTER TABLE "_CollectionToContact" ADD CONSTRAINT "_CollectionToContact_A_fkey" FOREIGN KEY ("A") REFERENCES "Collection"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CollectionToContact" ADD CONSTRAINT "_CollectionToContact_B_fkey" FOREIGN KEY ("B") REFERENCES "Contact"("id") ON DELETE CASCADE ON UPDATE CASCADE;
