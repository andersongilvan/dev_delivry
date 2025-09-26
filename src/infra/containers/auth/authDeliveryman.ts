import { AuthenticateClientController } from "@//http/controllers/auth/AuthenticateClientController"
import { AuthenticateDeliverymanUsecase } from "@//modules/auth/authenticateDeliveryman/AuthenticateDeliverymanUseCase"
import { DeliverymanRepository } from "../../database/prisma/DeliverymanRepository"
import { prisma } from "../../database/prisma"



const authenticateDeliverymanUseCase = new AuthenticateDeliverymanUsecase(new DeliverymanRepository(prisma))

const authenticateDelivarymanController = new AuthenticateClientController(authenticateDeliverymanUseCase)

export { authenticateDelivarymanController }