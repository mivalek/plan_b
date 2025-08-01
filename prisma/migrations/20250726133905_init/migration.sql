-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "isAdmin" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MyBoulder" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "boulderId" TEXT NOT NULL,
    "repeats" INTEGER NOT NULL,
    "done" BOOLEAN NOT NULL DEFAULT false,
    "difficulty" INTEGER NOT NULL,
    "rating" INTEGER NOT NULL,

    CONSTRAINT "MyBoulder_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Attempt" (
    "id" SERIAL NOT NULL,
    "boulderId" INTEGER NOT NULL,
    "success" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Attempt_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Setter" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Setter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Boulder" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "setterId" INTEGER NOT NULL,
    "position" INTEGER[],
    "location" TEXT NOT NULL,
    "room" TEXT NOT NULL,
    "difficulty" INTEGER NOT NULL,
    "holdColors" TEXT[],
    "tags" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Boulder_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Setter_email_key" ON "Setter"("email");

-- AddForeignKey
ALTER TABLE "MyBoulder" ADD CONSTRAINT "MyBoulder_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MyBoulder" ADD CONSTRAINT "MyBoulder_boulderId_fkey" FOREIGN KEY ("boulderId") REFERENCES "Boulder"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Attempt" ADD CONSTRAINT "Attempt_boulderId_fkey" FOREIGN KEY ("boulderId") REFERENCES "MyBoulder"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Boulder" ADD CONSTRAINT "Boulder_setterId_fkey" FOREIGN KEY ("setterId") REFERENCES "Setter"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
