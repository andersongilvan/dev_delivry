import { UpdateDeliverycontroller } from "@//http/controllers/delivery/UpdateDeliveryController";
import { UpdateDeliveryUseCase } from "@//modules/delivery/useCases/updateDeliveryUsecase/UpdateDeliveryUseCase";
import { prisma } from "../../database/prisma";
import { Deliveryrepository } from "../../database/prisma/DeliveryRepository";

const updateDeliveryUseCase = new UpdateDeliveryUseCase(new Deliveryrepository(prisma))

const updateDeliveryController = new UpdateDeliverycontroller(updateDeliveryUseCase)

export { updateDeliveryController }