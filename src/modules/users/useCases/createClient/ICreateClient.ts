import { IUserResponse } from "../../dtos/IUserResponse";
import { IUserRequest } from "../../dtos/UserRequest";

export interface ICreateUser {
    execute({username, password} : IUserRequest) : Promise<IUserResponse>
}