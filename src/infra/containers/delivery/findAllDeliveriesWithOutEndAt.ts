import { FindAllDeliveriesWithOutEndDateController } from "@//http/controllers/delivery/FindAllDeliveriesWithOutEndDateController";
import { FindAllDeliveriesWithOutEndDateUseCase } from "@//modules/delivery/useCases/fidAllDeliveriesWithOutEndDate/FidAllDeliveriesWithOutEndDateUseCase";
import { Deliveryrepository } from "../../database/prisma/DeliveryRepository";
import { prisma } from "../../database/prisma";

const findAllDeliveriesWithOutEndDateUseCase = new FindAllDeliveriesWithOutEndDateUseCase(new Deliveryrepository(prisma))

const findAllDeliveriesWithOutEndDateController = new FindAllDeliveriesWithOutEndDateController(findAllDeliveriesWithOutEndDateUseCase)

export { findAllDeliveriesWithOutEndDateController }