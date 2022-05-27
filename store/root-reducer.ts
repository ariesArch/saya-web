import { combineReducers } from "redux";

import { ReduxState } from "@/interfaces/redux.interfaces";
import coursesReducer from "@/store/courses/courses.reducer";
import liveClassReducer from "@/store/live-class/live-class.reducer";
import notificationsReducer from "@/store/notifications/notifications.reducer";
import paymentReducer from "@/store/payment/payment.reducer";
import userReducer from "@/store/user/user.reducer";

const rootReducer = combineReducers<ReduxState>({
    userState: userReducer,
    coursesState: coursesReducer,
    liveClassState: liveClassReducer,
    paymentState: paymentReducer,
    notificationsState: notificationsReducer,
});

export default rootReducer; // this will return modified version of rootReducer with storage persistence
