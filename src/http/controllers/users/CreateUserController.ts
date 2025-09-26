import { ICreateUser } from "@//modules/client/useCases/createClient/ICreateClient"
import { NextFunction, Request, Response } from "express"


export class CreateUserController {

    constructor(private useCase: ICreateUser) { }

    handler = async (request: Request, response: Response, next: NextFunction) => {
        try {
            const { username, password } = request.body

            const result = await this.useCase.execute({ username, password })

            return response.status(201).json(result)

        } catch (error) {
            next(error)
        }
    }

}