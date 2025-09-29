import { IFindDeliveriesByCLient } from "@//modules/delivery/useCases/findDeliveriesByClient/IFindDeliveriesByClient";
import { NextFunction, Request, Response } from "express";

export class FindDeliveriesByClientController {

    constructor(private findDeliveriesByClientUseCase: IFindDeliveriesByCLient) { }

    handler = async (request: Request, response: Response, next: NextFunction) => {

        try {

            const { idClient } = request

            console.log(idClient)

            const result = await this.findDeliveriesByClientUseCase.execute(idClient)

            return response.status(200).json(result)

        } catch (error) {
            next(error)
        }

    }

}