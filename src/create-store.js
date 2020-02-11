// import { createStore, applyMiddleware } from "redux";
import { createStore } from "redux";
// import logger from "redux-logger";
import { rootReducer } from "./store";

export const store = createStore(rootReducer);
