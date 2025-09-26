import { Router } from "express"
import { clientRoutes } from "./clientRoutes"
import { deliverymanRoutes } from "./deliverymanRoutes"
import { deliveryRoutes } from "./deliveriesRoutes"

const routes = Router()


routes.use("/clients", clientRoutes)
routes.use("/deliveryman", deliverymanRoutes)
routes.use("/deliveries", deliveryRoutes)

export { routes }