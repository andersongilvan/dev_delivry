
import { CreateUserController } from "../../../http/controllers/users/CreateUserController"
import { CreateClientUseCase } from "../../../modules/client/useCases/createClient/CreateClientUseCase"
import { prisma } from "../../database/prisma"
import { ClientRepository } from "../../database/prisma/ClientRepository"


const clientRepository = new ClientRepository(prisma)
const createClientUseCase = new CreateClientUseCase(clientRepository)
const createCLientController = new CreateUserController(createClientUseCase)

export { createCLientController }