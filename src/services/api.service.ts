import {IUserResponseModel} from "../models/IUserResponseModel.ts";

export const getAllUsers = async (skip:string):Promise<IUserResponseModel> => {
    return await fetch('https://dummyjson.com/users?skip='+skip)
        .then(value => value.json());
}