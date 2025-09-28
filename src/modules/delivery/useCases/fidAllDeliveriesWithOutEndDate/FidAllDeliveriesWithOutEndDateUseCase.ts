import { DeliveryMapper } from "../../mappers/Deliverymapper"
import { IDeliveryReponse } from "../../reponse/IDeliveryResponse"
import { IDeliveryRepository } from "../../repository/IDeliveryRepository"
import { IFindAllDeliveriesWithOutEndDate } from "./IFidAllDeliveriesWithOutEndDate"

export class FindAllDeliveriesWithOutEndDateUseCase implements IFindAllDeliveriesWithOutEndDate {

    constructor(private deliveryrepository: IDeliveryRepository) { }

    async execute(): Promise<IDeliveryReponse[]> {

        const result = await this.deliveryrepository.findAll()

        return result.map((d) => {
            return DeliveryMapper.toDeliveryresponse(d)
        })
    }

}