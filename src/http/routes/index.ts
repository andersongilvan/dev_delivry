import { Router } from "express"
import { clientRoutes } from "./clientRoutes"

const routes = Router()


routes.use("/clients", clientRoutes)

export { routes }