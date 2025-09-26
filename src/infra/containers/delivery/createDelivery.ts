import { CreateDeliveryController } from "@//http/controllers/delivery/CreateDeliveryController"
import { CreateDeliveryUseCase } from "@//modules/delivery/useCases/createDeliveryUseCase/CreateDeliveryUseCase"
import { Deliveryrepository } from "../../database/prisma/DeliveryRepository"
import { prisma } from "../../database/prisma"


const createDeliveryUseCase = new CreateDeliveryUseCase(new Deliveryrepository(prisma))

const createDeliveryController = new CreateDeliveryController(createDeliveryUseCase)

export { createDeliveryController }