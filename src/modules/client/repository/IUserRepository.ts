import { Client, Deliveries, Prisma } from "@prisma/client"

export interface IUserRepository {

    save({username, password}: Prisma.ClientCreateInput) : Promise<Client>
    findByUsername(username: string) : Promise<Client | null>


}