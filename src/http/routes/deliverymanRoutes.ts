import { createDeliverymanController } from "@//infra/containers/deliveryman/create"
import { Router } from "express"



const deliverymanRoutes = Router()

deliverymanRoutes.post("/", createDeliverymanController.handler)


export { deliverymanRoutes }