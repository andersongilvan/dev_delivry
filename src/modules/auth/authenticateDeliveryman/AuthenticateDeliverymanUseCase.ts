import "dotenv/config"
import { compare } from "bcryptjs"
import { IDeliverymanRepository } from "../../deliveryman/repository/IDeliverymanRepositry"
import { InvalidCredentialsException } from "../exceptions/InvalidCredentialsException"
import { IAuthenticateDeliveryman } from "./IAuthenticateDeliveryman"
import { sign } from "jsonwebtoken"

export class AuthenticateDeliverymanUsecase implements IAuthenticateDeliveryman {

    constructor(private deliverymanRepository: IDeliverymanRepository) { }

    async execute(usermane: string, password: string): Promise<string> {

        // validar os dados
        if (!usermane || !password) {
            throw new InvalidCredentialsException()
        }

        // verificar se o username esta cadastrado no banco de dados
        const deliverymanExist = await this.deliverymanRepository.findByUsername(usermane)

        if (!deliverymanExist) {
            throw new InvalidCredentialsException()
        }

        // comparar a senha
        const passwordIsMatch = await compare(password, deliverymanExist.password)

        if (!passwordIsMatch) {
            throw new InvalidCredentialsException()
        }

        // gerar o token
        const token = sign({
            username: usermane,
            role: deliverymanExist.role
        }, process.env.SECRET_KEY!, {
            subject: deliverymanExist.id,

            expiresIn: "1d"
        })

        // retornar o token
        return token
    }

}