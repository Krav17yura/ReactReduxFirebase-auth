import {SHOW_CURRENT_USER_REQUEST, SHOW_CURRENT_USER_SUCCESS} from "./actionTypes";
import {transformUserData} from "../../../helpers";


export const showCurrentUserRequest = () => ({
        type: SHOW_CURRENT_USER_REQUEST
    }
);
export const showCurrentUserSuccess = user => ({
        type: SHOW_CURRENT_USER_SUCCESS, payload: user
    })
;

export const fetchCurrentUser = () => (dispatch, getState, firebase) => {
    const {isAuthenticated} = getState().reAuth;

    if (!isAuthenticated) {
        dispatch(showCurrentUserSuccess(null));
        return Promise.resolve({});
    }

    const currentUser = firebase.auth().currentUser;
    return Promise.resolve(dispatch(showCurrentUserSuccess(transformUserData(currentUser))));
};