import { IDeliverymanResponse } from "../response/IDeliverymanResponse";

export interface ICreateDeliveryman {
    execute(requestBoby : any) : Promise<IDeliverymanResponse>
}