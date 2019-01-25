import { combineReducers } from "redux";
import { gallery } from "./features/Gallery/reducers";
import { auth } from "./features/Auth/reducers";
import { profile } from "./features/HeaderProfile/reducers";

export default combineReducers({ gallery, auth, profile });
