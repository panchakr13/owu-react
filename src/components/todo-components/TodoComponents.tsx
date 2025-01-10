import {useEffect, useState} from "react";
import {ITodo} from "../../models/ITodo.ts";
import TodoComponent from "../todo-component/TodoComponent.tsx";


const TodoComponents = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);

    useEffect(() => {

        fetch('https://dummyjson.com/todos')
            .then(value => value.json())
            .then(data => {
                setTodos(data.todos)
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