export class InvalidCredentialsException extends Error {
    constructor(readonly statusCode: number = 404) {
        super("Credenciais inválidas")
    }
}