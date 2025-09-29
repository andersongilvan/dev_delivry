import { IUpdateDelivery } from "@//modules/delivery/useCases/updateDeliveryUsecase/IUpdateDelivery";
import { NextFunction, Request, Response } from "express"

export class UpdateDeliverycontroller {

    constructor(private udateDeliveryUseCase: IUpdateDelivery) { }

    handler = async (request: Request, response: Response, next: NextFunction) => {

        try {

            const { id } = request.params
            const { idDeliveryman } = request

            console.log(`id delivery ${id}`)
            console.log(`id deliveryman ${idDeliveryman}`)

            const result = await this.udateDeliveryUseCase.execute(id, idDeliveryman)

            return response.status(200).json(result)

        } catch (error) {
            next(error)
        }

    }

}