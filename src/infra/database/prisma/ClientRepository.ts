import { Prisma, Client, PrismaClient, Deliveries } from "@prisma/client"
import { IUserRepository } from "../../../modules/client/repository/IUserRepository"

export class ClientRepository implements IUserRepository {

    constructor(private prisma: PrismaClient) { }

   async findDeliveriesByClient(idClient: string): Promise<Deliveries[]> {
       return this.prisma.deliveries.findMany({
        where : { id_client : idClient }
       })
    }
    
    async findByUsername(username: string): Promise<Client | null> {
        return this.prisma.client.findFirst({
            where: {
                username: {
                    equals: username,
                    mode: "insensitive"
                }
            }
        })
    }

    async save({ username, password }: Prisma.ClientCreateInput): Promise<Client> {

        return await this.prisma.client.create({
            data: { username, password }
        })
    }

}