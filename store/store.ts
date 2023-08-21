import { composeWithDevTools } from "@redux-devtools/extension";
import { Context, createWrapper, MakeStore } from "next-redux-wrapper";
import { applyMiddleware, createStore, Middleware, Store } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import { ReduxState } from "@/interfaces/redux.interfaces";

import rootReducer from "./root-reducer";

const middlewares: Middleware[] = [thunk];

if (process.env.NODE_ENV === "development") {
    // middlewares.push(logger);
}

const makeStore: MakeStore<Store<ReduxState>> = (_context: Context) =>
    createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));

export const wrapper = createWrapper<Store<ReduxState>>(makeStore, { debug: false });
