import "dotenv/config"
import { NextFunction, Request, Response } from "express"
import { verify } from "jsonwebtoken"


interface IPayload {
    sub: string
    role: string
}

export function authDeliveryman(request: Request, response: Response, next: NextFunction) {

    const authHeader = request.headers.authorization

    if (!authHeader) {
        return response.status(401).json({ message: "Token não enviado" })
    }

    // pegar o token
    const [, token] = authHeader.split(" ")

    // validar o token 
    try {
        const { sub, role } = verify(token, process.env.SECRET_KEY!) as IPayload

        if (role !== "DELIVERYMAN") {
            return response.status(401).json({ message: "Usuário não autorizado" })
        }

        request.idDeliveryman = sub

        return next()

    } catch (error) {
        return response.status(400).json({ message: "Token inválido" })
    }
}