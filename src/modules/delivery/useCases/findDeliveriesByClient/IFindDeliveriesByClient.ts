import { IDeliveryReponse } from "../../reponse/IDeliveryResponse";

export interface IFindDeliveriesByCLient {
    execute(idClient: string): Promise<IDeliveryReponse[]>
}