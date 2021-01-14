import React from 'react'
import {Route, Redirect} from 'react-router-dom';
import {useSelector} from "react-redux";

export const PrivateRoute = ({...rest}) => {
    const {children} = rest
    const {isAuthenticated} = useSelector(state => state.reAuth);

    if(!isAuthenticated){
        return (
            <Redirect to='/login'/>
        )
    }

    return (
        <Route{...rest}>{children}</Route>
    )
}
