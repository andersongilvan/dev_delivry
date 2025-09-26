-- CreateTable
CREATE TABLE "public"."clients" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "clients_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Deliveries" (
    "id" TEXT NOT NULL,
    "item_name" TEXT NOT NULL,
    "id_client" TEXT NOT NULL,
    "id_deliverymen" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "end_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Deliveries_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "clients_username_key" ON "public"."clients"("username");

-- AddForeignKey
ALTER TABLE "public"."Deliveries" ADD CONSTRAINT "Deliveries_id_client_fkey" FOREIGN KEY ("id_client") REFERENCES "public"."clients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Deliveries" ADD CONSTRAINT "Deliveries_id_deliverymen_fkey" FOREIGN KEY ("id_deliverymen") REFERENCES "public"."deliveryman"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
