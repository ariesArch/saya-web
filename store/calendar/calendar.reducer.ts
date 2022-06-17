import { WeekDayItem } from "@/interfaces/calendar.interfaces";
import { ActionType, CalendarState } from "@/interfaces/redux.interfaces";
import {
    SET_SCHEDULE,
    SET_WEEKLY_PROGRESS,
    UPDATE_SCHEDULE_ITEM,
} from "@/store/calendar/calendar.action-types";

const initialState: CalendarState = {
    schedule: [],
    weeklyProgress: [],
};

const calendarReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case SET_SCHEDULE:
            return {
                ...state,
                schedule: action.payload.map((day: WeekDayItem) => ({
                    ...day,
                    schedules: day.schedules.map((item) => ({ ...item, duration: +item.duration })),
                })),
            };
        case UPDATE_SCHEDULE_ITEM:
            return {
                ...state,
                schedule: state.schedule.map((day) =>
                    day.day_id === action.payload.dayId
                        ? {
                              ...day,
                              schedules: day.schedules.map((item) =>
                                  item.schedule_id === action.payload.schedule.schedule_id
                                      ? action.payload.schedule
                                      : item
                              ),
                          }
                        : day
                ),
            };
        case SET_WEEKLY_PROGRESS:
            return {
                ...state,
                weeklyProgress: action.payload,
            };
        default:
            return state;
    }
};

export default calendarReducer;
