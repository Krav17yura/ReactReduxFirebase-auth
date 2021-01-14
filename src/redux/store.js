import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import firebase from "../firebase-config";
import rootReducer from "./ducks/rootReducer";

const dev = !process.env.REACT_APP_ENV || process.env.REACT_APP_ENV === "development";

const composeEnhancers =
    dev && typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        : compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk.withExtraArgument(firebase))))

export default store;