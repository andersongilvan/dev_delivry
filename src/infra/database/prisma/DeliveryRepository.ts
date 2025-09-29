import { IDeliveryRepository } from "@//modules/delivery/repository/IDeliveryRepository"
import { IDeliveryrequest } from "@//modules/delivery/request/IDeliveryRequest"
import { Deliveries, PrismaClient } from "@prisma/client"

export class Deliveryrepository implements IDeliveryRepository {

    constructor(private prisma: PrismaClient) { }


    async findByClient(idClient: string): Promise<Deliveries[]> {

        return await this.prisma.deliveries.findMany({
            where: { id_client: idClient }
        })

    }


    async findById(id: string): Promise<Deliveries | null> {

        return await this.prisma.deliveries.findUnique({
            where: { id }
        })

    }

    async update(id: string, idDeliveryman: string): Promise<Deliveries> {

        return await this.prisma.deliveries.update({
            where: { id },
            data: { id_deliverymen: idDeliveryman }
        })

    }

    async findAll(): Promise<Deliveries[]> {

        return await this.prisma.deliveries.findMany({
            where: { end_at: null, id_deliverymen: null }
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