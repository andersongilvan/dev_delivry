export interface IAuthenticateDeliveryman {
    execute(usermane: string, password: string): Promise<string>
}