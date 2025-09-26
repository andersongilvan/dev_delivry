import { AuthenticateClientController } from "../../../http/controllers/account/AuthenticateClientController";
import { AuthenticateUserUseCase } from "../../../modules/auth/authenticateUser/AuthenticateUserUseCase";
import { prisma } from "../../database/prisma";
import { ClientRepository } from "../../database/prisma/ClientRepository";



const authenticateUserUseCase = new AuthenticateUserUseCase(new ClientRepository(prisma))
const authenticateUser = new AuthenticateClientController(authenticateUserUseCase)

export { authenticateUser }