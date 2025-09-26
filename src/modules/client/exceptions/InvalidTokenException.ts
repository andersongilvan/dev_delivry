export class InvalidTokenException extends Error {
    constructor(readonly statusCode: number = 400) {
        super("Token invalido")
    }
}