import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'; //Middleware que permite que Redux trabaje en asincronía
import rootReducer from '../reducer';


export const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk))
);