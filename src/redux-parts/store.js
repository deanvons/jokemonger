import { composeWithDevTools } from "@redux-devtools/extension";
import { applyMiddleware,combineReducers, createStore } from "redux";
import { userReducer } from "./user-reducer";
import { jokeReducer, jokesMiddleWare } from "./joke-reducer";

const appReducers = combineReducers({user:userReducer,jokes:jokeReducer});

export default createStore(appReducers,composeWithDevTools(applyMiddleware(jokesMiddleWare)));
