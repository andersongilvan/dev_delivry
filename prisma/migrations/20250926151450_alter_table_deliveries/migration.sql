-- DropForeignKey
ALTER TABLE "public"."Deliveries" DROP CONSTRAINT "Deliveries_id_deliverymen_fkey";

-- AlterTable
ALTER TABLE "public"."Deliveries" ALTER COLUMN "id_deliverymen" DROP NOT NULL,
ALTER COLUMN "end_at" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "public"."Deliveries" ADD CONSTRAINT "Deliveries_id_deliverymen_fkey" FOREIGN KEY ("id_deliverymen") REFERENCES "public"."deliveryman"("id") ON DELETE SET NULL ON UPDATE CASCADE;
