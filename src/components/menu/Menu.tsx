import {Link} from "react-router";


const Menu = () => {
    return (
        <ul>
            <li>
                <Link to={"/cars"}>cars</Link>
            </li>

            <li>
                <Link to={"/cars/create"}>create</Link>
            </li>
        </ul>
    );
};

export default Menu;