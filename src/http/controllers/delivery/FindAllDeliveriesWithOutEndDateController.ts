import { IFindAllDeliveriesWithOutEndDate } from "@//modules/delivery/useCases/fidAllDeliveriesWithOutEndDate/IFidAllDeliveriesWithOutEndDate"
import { NextFunction, Request, Response } from "express"

export class FindAllDeliveriesWithOutEndDateController {

    constructor(private findAlldekiveriesWithOutEndDate: IFindAllDeliveriesWithOutEndDate) { }

    handler = async (request: Request, response: Response, next: NextFunction) => {
        try {
            const result = await this.findAlldekiveriesWithOutEndDate.execute()

            return response.status(200).json(result)

        } catch (error) {
            next(error)
        }
    }

}