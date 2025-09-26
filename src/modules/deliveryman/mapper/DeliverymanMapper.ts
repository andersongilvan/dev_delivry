import { Deliveryman } from "@prisma/client"
import { IDeliverymanrequest } from "../request/IDelivarymanRequest"
import { IDeliverymanResponse } from "../response/IDeliverymanResponse"

export class DeliverymanMapper {

    static toDelyverymanRequest(requestBoby: any): IDeliverymanrequest {

        return {
            username : requestBoby.username,
            password : requestBoby.password
        }
    }

    static toDelyverymanresponse(data: Deliveryman): IDeliverymanResponse {
        return {
            id: data.id,
            username: data.username
        }
    }

}