import { ActionType, LiveClassState } from "@/interfaces/redux.interfaces";
import {
    LIVE_CLASS_NOTIFY_TOGGLE,
    LIVE_CLASSES_CHANGE,
    REMOVE_LIVE_CLASS,
    UPDATE_LIVE_CLASS,
} from "@/store/live-class/live-class.action-types";

const initialState: LiveClassState = {
    events: [],
};

const liveClassReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case LIVE_CLASSES_CHANGE:
            return { ...state, events: action.payload };
        case UPDATE_LIVE_CLASS:
            return {
                ...state,
                events: state.events.map((item) => (item.id === action.payload.id ? action.payload : item)),
            };
        case REMOVE_LIVE_CLASS:
            return { ...state, events: state.events.filter(({ id }) => id !== action.payload.id) };
        case LIVE_CLASS_NOTIFY_TOGGLE:
            return {
                ...state,
                events: state.events.map((item) =>
                    item.uuid === action.payload.uuid ? { ...item, is_notify: !item.is_notify } : item
                ),
            };
        default:
            return state;
    }
};

export default liveClassReducer;
