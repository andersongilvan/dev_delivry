import { IAuthenticateDeliveryman } from "@//modules/auth/authenticateDeliveryman/IAuthenticateDeliveryman"
import { NextFunction, Request, Response } from "express"

export class AuthenticateDeliverymanController {

    constructor(private authenticateDeliverymanUseCase: IAuthenticateDeliveryman) { }

    handler = async (request: Request, response: Response, next: NextFunction) => {
        try {
            const { username, password } = request.body

            const result = await this.authenticateDeliverymanUseCase.execute(username, password)

            return response.status(200).json(result)

        } catch (error) {
            next(error)
        }
    }

}