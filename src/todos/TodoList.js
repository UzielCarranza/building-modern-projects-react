import React from 'react';
import NewTodoForm from "./NewTodoForm";
import TodoListItem from "./TodoListItem";



// created component to map over every single item and display it in a div
//set up an empty array to prevent eny errors
const TodoList = ({todos = [{text: 'Go to the gym at 8:00 a.m.'}]}) => (
    <div className="list-wrapper">
        <NewTodoForm/>
        {todos.map(todo => <TodoListItem todo={todo}/>)}
    </div>
);


export default TodoList;