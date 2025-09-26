import { Router } from "express"
import { createCLientController } from "../../infra/containers/clients/create"
import { authenticateUser } from "../../infra/containers/auth/authClient"

const clientRoutes = Router()



clientRoutes.post("/", createCLientController.handler)
clientRoutes.post("/auth", authenticateUser.handler)

export { clientRoutes }