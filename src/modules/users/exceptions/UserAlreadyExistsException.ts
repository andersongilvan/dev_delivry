export class UsernameAlreadyExistsException extends Error {

    constructor(readonly statusCode: number = 409) {
        super("Usuário já cadastrado")
    }

}