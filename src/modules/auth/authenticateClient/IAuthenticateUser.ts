export interface IAuthenticateUser {
    execute(username: string, password: string): Promise<string>
}