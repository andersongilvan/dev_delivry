import { Prisma, Client, PrismaClient } from "@prisma/client"
import { IUserRepository } from "../../../modules/client/repository/IUserRepository"

export class ClientRepository implements IUserRepository {

    constructor(private prisma: PrismaClient) { }
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