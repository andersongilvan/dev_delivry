-- CreateTable
CREATE TABLE "public"."deliveryman" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "deliveryman_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "deliveryman_username_key" ON "public"."deliveryman"("username");
