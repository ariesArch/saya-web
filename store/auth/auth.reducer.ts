import { HYDRATE } from "next-redux-wrapper";

import { ActionType, AuthState } from "@/interfaces/redux.interfaces";
import { USER_DATA_CHANGE } from "@/store/auth/auth.action-types";

const initialState: AuthState = {
    userData: {},
};

const authReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case HYDRATE:
            return { ...state, userData: { ...state.userData, ...action.payload.authState.userData } };
        case USER_DATA_CHANGE:
            return { ...state, userData: action.payload };
        default:
            return state;
    }
};

export default authReducer;
