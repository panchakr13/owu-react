import {FC} from "react";
import {IUser} from "../../models/IUser.ts";

type UserTypeProps = {
    item: IUser
}

const UserComponent:FC<UserTypeProps> = ({item}) => {
    return (
        <div>
            {item.id}. {item.username} -- {item.email} <hr/>
        </div>
    );

};

export default UserComponent;