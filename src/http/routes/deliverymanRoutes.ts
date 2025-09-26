import { authenticateDelivarymanController } from "@//infra/containers/auth/authDeliveryman"
import { createDeliverymanController } from "@//infra/containers/deliveryman/create"
import { Router } from "express"



const deliverymanRoutes = Router()

deliverymanRoutes.post("/", createDeliverymanController.handler)
deliverymanRoutes.post("/auth", authenticateDelivarymanController.handler)


export { deliverymanRoutes }