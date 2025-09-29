import { createDeliveryController } from "@//infra/containers/delivery/createDelivery"
import { findAllDeliveriesWithOutEndDateController } from "@//infra/containers/delivery/findAllDeliveriesWithOutEndAt"
import { findDeliveriesByClientController } from "@//infra/containers/delivery/findDeliveriesByClient"
import { updateDeliveryController } from "@//infra/containers/delivery/updateDelivery"
import { authClient } from "@//middlewares/authClinet"
import { authDeliveryman } from "@//middlewares/authDeliveryman"
import { Router } from "express"


const deliveryRoutes = Router()

deliveryRoutes.post("/", authClient, createDeliveryController.handler)
deliveryRoutes.get("/", authDeliveryman, findAllDeliveriesWithOutEndDateController.handler)
deliveryRoutes.get("/client", authClient, findDeliveriesByClientController.handler)
deliveryRoutes.put("/:id", authDeliveryman, updateDeliveryController.handler)

export { deliveryRoutes }