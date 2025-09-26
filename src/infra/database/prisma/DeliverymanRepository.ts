import { Deliveryman, PrismaClient } from "@prisma/client"
import { IDeliverymanRepository } from "../../../modules/deliveryman/repository/IDeliverymanRepositry"
import { IDeliverymanrequest } from "../../../modules/deliveryman/request/IDelivarymanRequest"

export class DeliverymanRepository implements IDeliverymanRepository {

    constructor(private prisma: PrismaClient) { }

    async create({ username, password }: IDeliverymanrequest): Promise<Deliveryman> {

        return await this.prisma.deliveryman.create({
            data: { username, password }
        })

    }
    async findByUsername(username: string): Promise<Deliveryman | null> {

        return await this.prisma.deliveryman.findFirst({
            where: {
                username: {
                    equals: username,
                    mode: "insensitive"
                }
            }
        })

    }

}