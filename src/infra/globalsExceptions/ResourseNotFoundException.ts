export class ResourceNotFoundExceptions extends Error {
    constructor(readonly message: string, readonly statusCode: number = 404) {
        super(message)
    }
}