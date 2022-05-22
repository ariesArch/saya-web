import { HYDRATE } from "next-redux-wrapper";

import { ActionType, UserState } from "@/interfaces/redux.interfaces";
import { USER_DATA_CHANGE, USER_DATA_UPDATE } from "@/store/user/user.action-types";

const initialState: UserState = {
    userData: {},
};

const userReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case HYDRATE:
            return {
                ...state,
                userData: { ...state.userData, ...action.payload.userState.userData },
            };
        case USER_DATA_CHANGE:
            return { ...state, userData: action.payload };
        case USER_DATA_UPDATE:
            return { ...state, userData: { ...state.userData, ...action.payload } };
        default:
            return state;
    }
};

export default userReducer;
