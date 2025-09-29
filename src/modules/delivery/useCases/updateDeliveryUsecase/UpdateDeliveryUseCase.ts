import { ResourceNotFoundExceptions } from "@//infra/globalsExceptions/ResourseNotFoundException"
import { DeliveryMapper } from "../../mappers/Deliverymapper"
import { IDeliveryReponse } from "../../reponse/IDeliveryResponse"
import { IDeliveryRepository } from "../../repository/IDeliveryRepository"
import { IUpdateDelivery } from "./IUpdateDelivery"

export class UpdateDeliveryUseCase implements IUpdateDelivery {

    constructor(private repository: IDeliveryRepository) { }

    async execute(idDelivery: string, idDeliveryman: string): Promise<IDeliveryReponse> {

        // verificar se o id existe 
        const deliveryexist = await this.repository.findById(idDelivery)

        if (!deliveryexist) {
            throw new ResourceNotFoundExceptions("Delivery não encontrado")
        }

        const result = await this.repository.update(idDelivery, idDeliveryman)

        return DeliveryMapper.toDeliveryresponse(result)

    }

}