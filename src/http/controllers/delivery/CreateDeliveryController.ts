import { ICreateDeliveryUseCase } from "@//modules/delivery/useCases/createDeliveryUseCase/ICreateDelivery"
import { NextFunction, Request, Response } from "express"


export class CreateDeliveryController {

    constructor(private createDeliveryUseCase: ICreateDeliveryUseCase) { }

    handler = async (request: Request, response: Response, next: NextFunction) => {

        try {

            const idClient = request.idClient

            const { itemName } = request.body

            const result = await this.createDeliveryUseCase.execute({ idClient, itemName })

            return response.status(201).json(result)

        } catch (error) {
            next(error)
        }
    }

}