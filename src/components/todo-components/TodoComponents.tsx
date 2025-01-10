import {useEffect, useState} from "react";
import {ITodo} from "../../models/ITodo.ts";
import TodoComponent from "../todo-component/TodoComponent.tsx";


const TodoComponents = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);

    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(value => value.json())
            .then(response => {
                setTodos(response)
            });
        return () => {
            console.log('done')
        }

    }, []);

    return (
        <div>
            {
                todos.map(todo => <TodoComponent key={todo.id} item={todo}/>)
            }
        </div>
    )

};

export default TodoComponents;