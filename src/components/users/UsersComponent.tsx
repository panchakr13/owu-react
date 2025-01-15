import {useEffect, useState} from "react";
import {IUser} from "../../models/IUser.ts";
import UserComponent from "../user/UserComponent.tsx";
import {userService} from "../../services/api.service.ts";
import {useSearchParams} from "react-router-dom";


const UsersComponent = () => {


    const [users, setUsers] = useState<IUser[]>([]);
    const [query] = useSearchParams();

    useEffect(() => {
        const pg = query.get('pg')
        userService.getUsers().then((allUsers)=>{
            setUsers(allUsers);

        })
    }, []);

    return (
        <div>
            {
                users.map(user => <UserComponent key={user.id} item={user}/>)
            }
        </div>
    );
};

export default UsersComponent;