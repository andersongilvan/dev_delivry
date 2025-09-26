import { CreateDeliverymanUseCase } from "@//modules/deliveryman/usecases/CreateDeliverymanUseCase"
import { DeliverymanRepository } from "../../database/prisma/DeliverymanRepository"
import { prisma } from "../../database/prisma"
import { CreateDeliverymanController } from "@//http/controllers/deliveryman/createDeliveryman"




const createDeliverymanUseCase = new CreateDeliverymanUseCase(new DeliverymanRepository(prisma))

const createDeliverymanController = new CreateDeliverymanController(createDeliverymanUseCase)

export { createDeliverymanController }