import { Deliveries } from "@prisma/client";
import { IDeliveryrequest } from "../request/IDeliveryRequest";
import { IDeliveryReponse } from "../reponse/IDeliveryResponse";

export class DeliveryMapper {

    static toDeliveryRequest({idClient, itemName}: any): IDeliveryrequest {
        return {
            idClient, 
            itemName
        }
    }

    static toDeliveryresponse(data: Deliveries): IDeliveryReponse {
        return {
            id: data.id,
            idCliet: data.id_client,
            idDeliveryman: data.id_deliverymen,
            itemName: data.item_name,
            createdAt: data.created_at
        }
    }

}