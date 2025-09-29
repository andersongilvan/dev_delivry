import { IDeliveryReponse } from "../../reponse/IDeliveryResponse"

export interface IUpdateDelivery {
    execute(idDelivery: string, idDeliveryman: string): Promise<IDeliveryReponse>
}