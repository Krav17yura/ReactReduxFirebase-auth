import React from "react";
import {Switch, Route} from 'react-router-dom';

import {PrivateRoute} from "./components/PrivateRoute";
import {NotFoundPage} from "./pages/NotFoundPage";
import {SignupPage} from "./pages/SignupPage";
import {LoginPage} from "./pages/LoginPage";
import {ProfilePage} from "./pages/ProfilePage";

export const App = () => {
    return (
        <div>
            <Switch>
                <Route path='/signup' component={SignupPage}/>
                <Route path='/login' component={LoginPage}/>
                <PrivateRoute path='/profile'>
                    <ProfilePage/>
                </PrivateRoute>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    )
}