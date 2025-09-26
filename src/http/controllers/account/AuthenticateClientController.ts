import { NextFunction, Request, Response } from "express"
import { IAuthenticateUser } from "../../../modules/auth/authenticateUser/IAuthenticateUser"

export class AuthenticateClientController {

    constructor(private useCase: IAuthenticateUser) { }

    handler = async (request: Request, response: Response, next: NextFunction) => {
        try {
            const { username, password } = request.body

            const result = await this.useCase.execute(username, password)

            return response.status(201).json(result)

        } catch (error) {
            next(error)
        }
    }

}