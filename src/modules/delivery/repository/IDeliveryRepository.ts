import { Deliveries } from "@prisma/client"
import { IDeliveryrequest } from "../request/IDeliveryRequest"

export interface IDeliveryRepository {
    create(data: IDeliveryrequest): Promise<Deliveries>
    findAll(): Promise<Deliveries[]>
    findById(id: string): Promise<Deliveries | null>
    findByClient(idClient : string) : Promise<Deliveries[]>
    update(id: string, idDeliveryman: string): Promise<Deliveries>
}