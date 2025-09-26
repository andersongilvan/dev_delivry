import { AuthenticateClientController } from "../../../http/controllers/account/AuthenticateClientController";
import { AuthenticateClientUseCase } from "../../../modules/auth/authenticateClient/AuthenticateClientUseCase";
import { prisma } from "../../database/prisma";
import { ClientRepository } from "../../database/prisma/ClientRepository"



const authenticateClientUseCase = new AuthenticateClientUseCase(new ClientRepository(prisma))
const authenticateUser = new AuthenticateClientController(authenticateClientUseCase)

export { authenticateUser }