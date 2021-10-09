import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import subjectbudget from "./subjectbudget";

export default combineReducers({
    alert,
    auth,
    subjectbudget,

});