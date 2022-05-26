import React, {useState} from 'react';
import {connect} from 'react-redux';
import {createTodo} from './actions.js'

const NewTodoForm = ({todos, onCreatePressed}) => {
    const [inputValue, setInputValue] = useState('');

    return (
        <div className="new-todo-form">
            <input type="text"
                   className="new-todo-input"
                   value={inputValue}
                   onChange={e => setInputValue(e.target.value)}
                   placeholder="Type your new todo here"
            />
            <button
                onClick={() => {
                    const isDuplicateText = todos.some(todo => todo.text === inputValue)
                    if (!isDuplicateText) {
                        onCreatePressed(inputValue);
                        setInputValue("");
                    }

                }}
                className="new-todo-button">Create Todo
            </button>
        </div>
    )
}

// objects that represents properties
// Jobs of this is to take this state object
// and return another object containing the pieces of that state
// that our component needs access to
const mapStateToProps = state => ({
    todos: state.todos,
});

//function that allows components to trigger actions that our Redux store will respond to
// in our case, we want to trigger our Redux action when somebody clicks the create todo button
const mapDispatchToProps = dispatch => ({
    onCreatePressed: text => dispatch(createTodo(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);