import { IDeliveryRepository } from "@//modules/delivery/repository/IDeliveryRepository"
import { IDeliveryrequest } from "@//modules/delivery/request/IDeliveryRequest"
import { Deliveries, PrismaClient } from "@prisma/client"

export class Deliveryrepository implements IDeliveryRepository {

    constructor(private prisma: PrismaClient) { }
    async findAll(): Promise<Deliveries[]> {

        return await this.prisma.deliveries.findMany({
            where: { end_at: null }
        })

    }

    async create(data: IDeliveryrequest): Promise<Deliveries> {

        return await this.prisma.deliveries.create({
            data: {
                id_client: data.idClient,
                item_name: data.itemName
            }
        })
    }

}