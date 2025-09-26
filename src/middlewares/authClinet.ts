import "dotenv/config"
import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
    sub: string
}

export async function authClient(request: Request, response: Response, next: NextFunction) {

    const authHeader = request.headers.authorization

    if (!authHeader) {
        return response.status(401).json({ message: "Token não enviado" })
    }

    // pegar o token
    const [_, token] = authHeader.split(" ")

    // validar o token
    try {
        const { sub } = verify(token, process.env.SECRET_KEY!) as IPayload

        request.idClient = sub

        return next()

    } catch (error) {
        return response.status(400).json({ message: "Token inválido" })
    }


}