import { createDeliveryController } from "@//infra/containers/delivery/createDelivery"
import { findAllDeliveriesWithOutEndDateController } from "@//infra/containers/delivery/findAllDeliveriesWithOutEndAt"
import { authClient } from "@//middlewares/authClinet"
import { authDeliveryman } from "@//middlewares/authDeliveryman"
import { Router } from "express"


const deliveryRoutes = Router()

deliveryRoutes.post("/", authClient, createDeliveryController.handler)
deliveryRoutes.get("/", authDeliveryman, findAllDeliveriesWithOutEndDateController.handler)

export { deliveryRoutes }