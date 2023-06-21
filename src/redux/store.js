import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducer';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//sirve para conectar nuestra app con la extension redux Devtools del navegador
const store = createStore(
    rootReducer, 
    composeEnhancer(applyMiddleware(thunkMiddleware)) //sirve para que podamos hacer peticiones a una appi/servidor
    );

export default store;   

