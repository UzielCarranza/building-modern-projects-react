import React from 'react';



// created component to map over every single item and display it in a div
const TodoList = ({todos}) => (
    <div className="list-wrapper">
        {todos.map(todo => <TodoListIteam todo={todo}/>)}
    </div>
);


export default TodoList;