import { combineReducers } from "redux";
import { gallery } from "./features/Gallery/reducers";
import { auth } from "./features/Login/reducers";

export default combineReducers({ gallery, auth });
