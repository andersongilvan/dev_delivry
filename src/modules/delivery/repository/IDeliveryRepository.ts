import { Deliveries } from "@prisma/client"
import { IDeliveryrequest } from "../request/IDeliveryRequest"

export interface IDeliveryRepository {
    create(data : IDeliveryrequest) : Promise<Deliveries>
    findAll(): Promise<Deliveries[]>
}