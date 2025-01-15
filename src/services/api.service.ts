import {IUserResponseModel} from "../models/IUserResponseModel.ts";

export const getAllUsers = async (skip:string):Promise<IUserResponseModel> => {
    return await fetch('https://dummyjson.com/users?limit=10&skip='+skip)
        .then(value => value.json());
}