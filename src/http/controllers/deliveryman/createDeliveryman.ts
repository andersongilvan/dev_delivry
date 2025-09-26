import { NextFunction, Request, response, Response } from "express"
import { ICreateDeliveryman } from "../../../modules/deliveryman/usecases/ICreateDeliveryman"

export class CreateDeliverymanController {

    constructor(private createDeliverymanUseCse: ICreateDeliveryman) { }

    handler = async (request: Request, response: Response, next: NextFunction) => {
        try {
            const result = await this.createDeliverymanUseCse.execute(request.body)

            return response.status(201).json(result)

        } catch (error) {
            next(error)
        }
    }

}