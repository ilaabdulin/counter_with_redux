import { combineReducers } from "redux";
import { reducer as countReducer } from "./user";

export const rootReducer = combineReducers({ countReducer });
