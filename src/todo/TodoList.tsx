import React, { useEffect, useState } from "react"
import { TodoItem } from "../utils";
import AddTodo from "./AddTodo";

// Add a todo item
// List all items
// Complete todo items
// Use the todoStore
// Delete todo items
// GitHub CLI

function TodoList() {
    const [todos, setTodos] = useState<TodoItem[]>();

    useEffect(() => {
        const todos: TodoItem[] = [{
            id: 1,
            completed: false,
            name: 'Sample todo'
        }];
        setTodos(todos);
    }, []);

    if (!todos) {
        return (
            <></>
        )
    }

    return (
        <div> 
            Todo items count: {todos?.length || 0}

            <AddTodo addTodo={(todo) => console.log('New todo item', todo)} />

            <ul> 
                <li>
                    {todos[0].name}
                </li>
            </ul>
        </div>
    );
}

export default TodoList;
