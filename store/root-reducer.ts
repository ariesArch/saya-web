import { combineReducers } from "redux";

import { ReduxState } from "@/interfaces/redux.interfaces";
import calendarReducer from "@/store/calendar/calendar.reducer";
import coursesReducer from "@/store/courses/courses.reducer";
import levelTestReducer from "@/store/level-test/level-test.reducer";
import liveClassReducer from "@/store/live-class/live-class.reducer";
import notificationsReducer from "@/store/notifications/notifications.reducer";
import paymentReducer from "@/store/payment/payment.reducer";
import userReducer from "@/store/user/user.reducer";
import countryCodesReducer from "./country-code/country-codes.reducer";

const rootReducer = combineReducers<ReduxState>({
    userState: userReducer,
    coursesState: coursesReducer,
    liveClassState: liveClassReducer,
    paymentState: paymentReducer,
    notificationsState: notificationsReducer,
    calendarState: calendarReducer,
    levelTestState: levelTestReducer,
    countryCodeState: countryCodesReducer
});

export default rootReducer; // this will return modified version of rootReducer with storage persistence
