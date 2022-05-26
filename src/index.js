import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/lib/integration/react'
import App from './App';
import {configureStore} from "./todos/store";
import {Provider} from 'react-redux';


const store = configureStore();
const persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <PersistGate
            loading={<div>Loagin...</div>}
            persistor={persistor}>
            <App/>
        </PersistGate>
    </Provider>
);

