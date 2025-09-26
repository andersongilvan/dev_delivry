import { Deliveries } from "@prisma/client"
import { IDeliverymanrequest } from "../../deliveryman/request/IDelivarymanRequest"
import { IDeliveryrequest } from "../request/IDeliveryRequest"


export interface IDeliveryRepository {

    create(data : IDeliveryrequest) : Promise<Deliveries>

}