import {createStore, combineReducers} from 'redux';
import {todos} from "./reducers";


const reducers = {
    todos,
};

//root reducer

const rootReducer = combineReducers(reducers);

export const configureStore = () => {
    createStore(rootReducer)
}