import { Deliveryman } from "@prisma/client";
import { IDeliverymanrequest } from "../request/IDelivarymanRequest";

export interface IDeliverymanRepository {
    create({username, password} : IDeliverymanrequest) : Promise<Deliveryman>
    findByUsername(username : string) : Promise<Deliveryman | null>
}