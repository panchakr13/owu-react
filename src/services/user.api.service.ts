import {urls} from "../constants/urls.ts";


export const userService ={
    getUsers: async <T, >():Promise<T> => {
        return await fetch(urls.users.allUsers)
            .then(value => value.json())
    }
}