import {combineReducers} from "redux";
import reAuth from "./auth/reducer";
import reUser from "./user/reducer";

const rootReducer = combineReducers({
    reAuth,
    reUser
})

export default rootReducer