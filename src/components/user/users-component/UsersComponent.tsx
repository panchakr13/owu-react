import {useEffect, useState} from "react";
import {IUser} from "../../../model/IUser.ts";
import UserComponent from "../user-component/UserComponent.tsx";
import {userService} from "../../../services/user.api.service.ts";
import {IBaseResponseModel} from "../../../model/IBaseResponseModel.ts";


const UsersComponent = () => {


    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        userService.getUsers<IBaseResponseModel & {users: IUser[]}>().then(({users})=>{
            setUsers(users);

        })
    }, []);

    return (
        <div>
            {
                users.map(user => <UserComponent key={user.id} user={user}/>)
            }
        </div>
    );
};

export default UsersComponent;