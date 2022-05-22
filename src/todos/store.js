import {createStore, combineReducers} from 'redux';


const reducers = {};

//root reducer

const rootReducer = combineReducers(reducers);

export const configureStore = () => {
    createStore(rootReducer)
}