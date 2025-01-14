import {FC} from "react";
import {IUser} from "../../../model/IUser.ts";
import {Link} from "react-router-dom";

type UserTypeProps = {
    user: IUser
}

const UserComponent:FC<UserTypeProps> = ({user}) => {
    return (
        <div>
            <Link to={'details'} state={user}>{user.username + ' --- ' + user.company.department}</Link>
        </div>
    );

};

export default UserComponent;