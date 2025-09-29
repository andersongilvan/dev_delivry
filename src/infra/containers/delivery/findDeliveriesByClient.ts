import { FindDeliveriesByClientController } from "@//http/controllers/delivery/FindDeliveriesByClientController";

import { Deliveryrepository } from "../../database/prisma/DeliveryRepository";
import { prisma } from "../../database/prisma";
import { FindDeliveriesByClientUseCase } from "@//modules/delivery/useCases/findDeliveriesByClient/FindDeliveriesByClientUseCase";


const finDeliveriesByClientUseCase = new FindDeliveriesByClientUseCase(new Deliveryrepository(prisma))

const findDeliveriesByClientController = new FindDeliveriesByClientController(finDeliveriesByClientUseCase)

export { findDeliveriesByClientController }