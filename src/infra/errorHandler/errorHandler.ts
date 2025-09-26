import { Request, Response, NextFunction } from "express"
import { UsernameAlreadyExistsException } from "../../modules/users/exceptions/UserAlreadyExistsException"
import { ZodError } from "zod"
import { InvalidCredentialsException } from "../../modules/auth/exceptions/InvalidCredentialsException"


export function errorHandler(error: Error, request: Request, response: Response, _: NextFunction) {

    if (error instanceof UsernameAlreadyExistsException) {
        return response.status(error.statusCode).json({ message: error.message })
    }

    if (error instanceof ZodError) {

        const errorList = error._zod.def.map((e) => ({
            field: e.path.join(),
            message: e.message
        }))

        return response.status(400).json({ validationError: errorList })
    }

    if (error instanceof InvalidCredentialsException) {
        return response.status(error.statusCode).json({message: error.message})
    }

    console.error("Erro ", error)
    return response.status(500).json({ error: "Internal error" })

}