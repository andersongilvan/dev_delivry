import z from "zod"
import { IDeliverymanRepository } from "../repository/IDeliverymanRepositry"
import { IDeliverymanResponse } from "../response/IDeliverymanResponse"
import { ICreateDeliveryman } from "./ICreateDeliveryman"
import { DeliverymanMapper } from "../mapper/DeliverymanMapper"
import { UsernameAlreadyExistsException } from "../../client/exceptions/UserAlreadyExistsException"
import { hash } from "bcryptjs"

export class CreateDeliverymanUseCase implements ICreateDeliveryman {

    constructor(private repository: IDeliverymanRepository) { }

    async execute(requestBoby: any): Promise<IDeliverymanResponse> {

        // validar os dados como zod
        const createDeliverymanSchema = z.object({
            username: z.string().nonempty("Campo obrigatório").min(6, "O campo 'username' deve conter no mínimo 6 catacteres"),
            password: z.string().nonempty("Campo obrigatório").min(6, "O campo 'password' deve conter no mínimo 6 catacteres"),
        })

        createDeliverymanSchema.parse(requestBoby)

        // criar o dto com o mapper
        const createDeliverymanRequest = DeliverymanMapper.toDelyverymanRequest(requestBoby)

        //verificar se o username existe no banco de dados
        const deliverymanExist = await this.repository.findByUsername(createDeliverymanRequest.username)

        if (deliverymanExist) {
            throw new UsernameAlreadyExistsException()
        }

        // encriptar a senha
        const passwordHash = await hash(createDeliverymanRequest.password, 6)

        // criar o deliveryman no banco de dados
        const deliverymanCreated = await this.repository.create({
            username: createDeliverymanRequest.username,
            password: passwordHash
        })

        return DeliverymanMapper.toDelyverymanresponse(deliverymanCreated)
    }

}