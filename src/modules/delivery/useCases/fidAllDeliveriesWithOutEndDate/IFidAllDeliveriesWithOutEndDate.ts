import { IDeliveryReponse } from "../../reponse/IDeliveryResponse";

export interface IFindAllDeliveriesWithOutEndDate {
    execute() : Promise<IDeliveryReponse[]>
}