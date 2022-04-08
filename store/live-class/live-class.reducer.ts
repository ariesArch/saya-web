import { ActionType, LiveClassState } from "@/interfaces/redux.interfaces";
import { LIVE_CLASSES_CHANGE } from "@/store/live-class/live-class.action-types";

const initialState: LiveClassState = {
    events: [],
};

const liveClassReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case LIVE_CLASSES_CHANGE:
            return { ...state, events: action.payload };
        default:
            return state;
    }
};

export default liveClassReducer;
