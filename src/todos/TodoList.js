import React from 'react';
import {connect} from "react-redux";
import NewTodoForm from "./NewTodoForm";
import TodoListItem from "./TodoListItem";
import {removeTodo} from "./actions";
// created component to map over every single item and display it in a div
//set up an empty array to prevent eny errors
const TodoList = ({todos = [], onRemovePressed}) => (
    <div className="list-wrapper">
        <NewTodoForm/>
        {todos.map(todo => <TodoListItem todo={todo} onRemovePressed={onRemovePressed}/>)}
    </div>
);


const mapStateToProps = state => ({
    todos: state.todos,
})

const mapDispatchToProps = dispatch => ({
    onRemovePressed: text => dispatch(removeTodo(text))
})


export default connect(mapStateToProps, mapDispatchToProps)(TodoList)