import { IUserResponse } from "../../dtos/IUserResponse";
import { IUserRequest } from "../../dtos/IUserRequest";

export interface ICreateUser {
    execute({username, password} : IUserRequest) : Promise<IUserResponse>
}