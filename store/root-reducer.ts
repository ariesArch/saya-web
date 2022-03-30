import { combineReducers } from "redux";

import { ReduxState } from "@/interfaces/redux.interfaces";
import authReducer from "@/store/auth/auth.reducer";

const rootReducer = combineReducers<ReduxState>({
    authState: authReducer,
});

export default rootReducer; // this will return modified version of rootReducer with storage persistence
