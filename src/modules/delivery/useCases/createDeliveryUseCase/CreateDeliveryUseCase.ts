import z from "zod"
import { IDeliveryReponse } from "../../reponse/IDeliveryResponse"
import { IDeliveryRepository } from "../../repository/IDeliveryRepository"
import { ICreateDeliveryUseCase } from "./ICreateDelivery"
import { DeliveryMapper } from "../../mappers/Deliverymapper"


export class CreateDeliveryUseCase implements ICreateDeliveryUseCase {

    constructor(private deliveryRepository: IDeliveryRepository) { }


    async execute({ idClient, itemName }: any): Promise<IDeliveryReponse> {

        // validar os dados
        const deliverySchema = z.object({
            idClient: z.string().nonempty("O campo 'idClient' é obrigatório"),
            itemName: z.string().nonempty("O campo 'itemName' é obrigatório")
        })

        deliverySchema.parse({ idClient, itemName })

        const deliveryRequest = DeliveryMapper.toDeliveryRequest({ idClient, itemName })

        const result = await this.deliveryRepository.create(deliveryRequest)

        return DeliveryMapper.toDeliveryresponse(result)

    }

}