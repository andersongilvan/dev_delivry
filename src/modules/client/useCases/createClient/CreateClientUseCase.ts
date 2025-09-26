import z from "zod"
import { IUserRequest } from "../../dtos/IUserRequest"
import { IUserRepository } from "../../repository/IUserRepository"
import { UsernameAlreadyExistsException } from "../../exceptions/UserAlreadyExistsException"
import { hash } from "bcryptjs";
import { ICreateUser } from "./ICreateClient"
import { IUserResponse } from "../../dtos/IUserResponse"


export class CreateClientUseCase implements ICreateUser {

    constructor(private repository: IUserRepository) { }

    async execute({ username, password }: IUserRequest) {
        const userReuqestSchema = z.object({
            username: z.string().nonempty("Campo obrigatório").min(6, "O campo 'username' deve conter no mínimo 6 catacteres"),
            password: z.string().nonempty("Campo obrigatório").min(6, "O campo 'password' deve conter no mínimo 6 catacteres"),
        })

        userReuqestSchema.parse({ username, password })

        // varificar se o username já está cadastrado
        const user = await this.repository.findByUsername(username)

        if (user) {
            throw new UsernameAlreadyExistsException()
        }

        // criar o hash de senha
        const passwordHash = await hash(password, 6)

        console.log(passwordHash)

        const result = await this.repository.save({ username, password: passwordHash })

        const userResponse: IUserResponse = {
            id: result.id,
            username: result.username
        }

        return userResponse
    }

}