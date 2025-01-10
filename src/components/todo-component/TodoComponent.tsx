import {ITodo} from "../../models/ITodo.ts";
import {FC} from "react";


type TodoPropType = {
    item: ITodo
};

const TodoComponent: FC<TodoPropType> = ( {item} ) => {
    return(
        <div> {item.id} -- {item.todo} -- {item.completed ? "True" : "False"}</div>
    );

};

export default TodoComponent;