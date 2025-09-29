import { DeliveryMapper } from "../../mappers/Deliverymapper";
import { IDeliveryReponse } from "../../reponse/IDeliveryResponse";
import { IDeliveryRepository } from "../../repository/IDeliveryRepository";
import { IFindDeliveriesByCLient } from "./IFindDeliveriesByClient";

export class FindDeliveriesByClientUseCase implements IFindDeliveriesByCLient {

    constructor(private deliveryRepository: IDeliveryRepository) { }

    async execute(idClient: string): Promise<IDeliveryReponse[]> {

        const result = await this.deliveryRepository.findByClient(idClient)

        return result.map((d) => DeliveryMapper.toDeliveryresponse(d))
    }

}