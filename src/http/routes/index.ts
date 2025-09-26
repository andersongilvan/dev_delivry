import { Router } from "express"
import { clientRoutes } from "./clientRoutes"
import { deliverymanRoutes } from "./deliverymanRoutes"

const routes = Router()


routes.use("/clients", clientRoutes)
routes.use("/deliveryman", deliverymanRoutes)

export { routes }