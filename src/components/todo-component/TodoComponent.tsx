import {ITodo} from "../../models/ITodo.ts";
import {FC} from "react";


type TodoPropType = {
    item: ITodo
};

const TodoComponent: FC<TodoPropType> = ( {item} ) => {
    return(
        <div>{item.title} - {item.completed ? "Completed" : "Not Completed"}</div>
    );

};

export default TodoComponent;