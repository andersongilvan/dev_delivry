import { createDeliveryController } from "@//infra/containers/delivery/createDelivery"
import { authClient } from "@//middlewares/authClinet"
import { Router } from "express"


const deliveryRoutes = Router()

deliveryRoutes.post("/", authClient, createDeliveryController.handler)

export { deliveryRoutes }