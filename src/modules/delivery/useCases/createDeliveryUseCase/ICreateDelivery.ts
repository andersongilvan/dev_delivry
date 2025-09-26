import { IDeliveryReponse } from "../../reponse/IDeliveryResponse"

export interface ICreateDeliveryUseCase {
    execute({idClient, itemName}: any): Promise<IDeliveryReponse>
}