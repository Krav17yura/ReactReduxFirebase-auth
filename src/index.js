import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import './index.css';
import {App} from "./App";
import firebase from "./firebase-config";
import {authInfoSuccess} from "./redux/ducks/auth/actionCreator";
import store from "./redux/store";


firebase.auth().onAuthStateChanged(user => {
    store.dispatch(authInfoSuccess(user));
    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
});



