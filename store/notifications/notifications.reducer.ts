import { ActionType, NotificationsState } from "@/interfaces/redux.interfaces";
import {
    READ_NOTIFICATION,
    SET_NOTIFICATIONS,
    SET_NOTIFICATIONS_ADS,
} from "@/store/notifications/notifications.action-types";

const initialState: NotificationsState = {
    notifications: [],
    ads: [],
};

const notificationsReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case SET_NOTIFICATIONS:
            return {
                ...state,
                notifications: action.payload,
            };
        case SET_NOTIFICATIONS_ADS:
            return {
                ...state,
                ads: action.payload,
            };
        case READ_NOTIFICATION:
            return {
                ...state,
                notifications: state.notifications.map((notification) =>
                    notification.id === action.payload ? { ...notification, read: true } : notification
                ),
            };
        default:
            return state;
    }
};

export default notificationsReducer;
