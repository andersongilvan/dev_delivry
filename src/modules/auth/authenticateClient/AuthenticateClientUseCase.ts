import "dotenv/config"
import { compare } from "bcryptjs"
import { IUserRepository } from "../../client/repository/IUserRepository"
import { InvalidCredentialsException } from "../exceptions/InvalidCredentialsException"
import { IAuthenticateUser } from "./IAuthenticateUser"
import { sign } from "jsonwebtoken"

export class AuthenticateClientUseCase implements IAuthenticateUser {

    constructor(private repository: IUserRepository) { }

    async execute(username: string, password: string): Promise<string> {
        // tratar os dados nulos
        if (!username || !password) {
            throw new InvalidCredentialsException()
        }

        // Verificar se o usuário esta cadastrado
        const userExists = await this.repository.findByUsername(username)

        if (!userExists) {
            throw new InvalidCredentialsException()
        }

        // verificar se a senha corresponde
        const passwordIsMatch = await compare(password, userExists.password)

        if (!passwordIsMatch) {
            throw new InvalidCredentialsException()
        }

        // Gerar o token
        const token = sign({ username }, process.env.SECRET_KEY!, {
            subject: userExists.id,
            expiresIn: "1d"
        })

        return token

    }

}