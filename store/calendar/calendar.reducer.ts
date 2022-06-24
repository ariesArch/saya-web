import { WeekDayItem } from "@/interfaces/calendar.interfaces";
import { ActionType, CalendarState } from "@/interfaces/redux.interfaces";
import {
    REMOVE_SCHEDULE_ITEM,
    REPEAT_WEEKLY_SCHEDULE_CHANGE,
    SET_SCHEDULE,
    SET_WEEKLY_PROGRESS,
    UPDATE_SCHEDULE_ITEM,
} from "@/store/calendar/calendar.action-types";

const initialState: CalendarState = {
    schedule: [],
    weeklyProgress: [],
    repeatWeeklySchedule: false,
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
        case REMOVE_SCHEDULE_ITEM:
            return {
                ...state,
                schedule: state.schedule.map((day) =>
                    day.day_id === action.payload.dayId
                        ? {
                              ...day,
                              schedules: day.schedules.filter(
                                  (item) => item.schedule_id !== action.payload.scheduleId
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
        case REPEAT_WEEKLY_SCHEDULE_CHANGE:
            return {
                ...state,
                repeatWeeklySchedule: action.payload,
            };
        default:
            return state;
    }
};

export default calendarReducer;
