import cookie from "js-cookie";
import { ThunkDispatch } from "redux-thunk";

import { ScheduleItem, WeeklyProgressItem } from "@/interfaces/calendar.interfaces";
import { DispatchType } from "@/interfaces/redux.interfaces";
import {
    REMOVE_SCHEDULE_ITEM,
    REPEAT_WEEKLY_SCHEDULE_CHANGE,
    SCHEDULE_CHANGE,
    SET_SCHEDULE,
    SET_WEEKLY_PROGRESS,
    UPDATE_SCHEDULE_ITEM,
} from "@/store/calendar/calendar.action-types";
import { createAxiosInstance, endpoints } from "@/utils/api";
import { emptyFunction } from "@/utils/index";

export const onSetSchedule = (schedule: ScheduleItem[]) => ({
    type: SET_SCHEDULE,
    payload: schedule,
});

export const onScheduleChange = (schedule: ScheduleItem[]) => ({
    type: SCHEDULE_CHANGE,
    payload: schedule,
});

export const onUpdateScheduleItem = (schedule: ScheduleItem, dayId: string) => ({
    type: UPDATE_SCHEDULE_ITEM,
    payload: { schedule, dayId },
});

export const onRemoveScheduleItem = (scheduleId: string, dayId: string) => ({
    type: REMOVE_SCHEDULE_ITEM,
    payload: { scheduleId, dayId },
});

export const onSetWeeklyProgress = (weeklyProgress: WeeklyProgressItem[]) => ({
    type: SET_WEEKLY_PROGRESS,
    payload: weeklyProgress,
});

export const onRepeatWeeklyScheduleChange = (repeatSchedule: boolean) => ({
    type: REPEAT_WEEKLY_SCHEDULE_CHANGE,
    payload: repeatSchedule,
});

export const fetchCalendarDataAsync = () => {
    return async (dispatch: DispatchType) => {
        const token = cookie.get("token");
        const instance = createAxiosInstance(token);

        try {
            const { data } = await instance.get(endpoints.calendar.getCalendarData);

            dispatch(onSetSchedule(data?.data?.schedule_data as ScheduleItem[]));
            dispatch(onSetWeeklyProgress(data?.data?.schedule_progress as WeeklyProgressItem[]));
            dispatch(onRepeatWeeklyScheduleChange(!!data?.data?.repeat_weekly_schedule));
        } catch (e) {
            console.log(e);
        }
    };
};

export const createScheduleItemAsync = (
    form: { day_id: string; time: string; duration: string },
    onSuccess = emptyFunction,
    onFailure = emptyFunction
) => {
    return async (dispatch: ThunkDispatch<any, any, any>) => {
        const token = cookie.get("token");
        const instance = createAxiosInstance(token);

        try {
            await instance.post(endpoints.calendar.createSingleScheduleData, form);

            dispatch(fetchCalendarDataAsync());

            onSuccess();
        } catch (e) {
            console.log(e);
            onFailure();
        }
    };
};

export const updateScheduleItemAsync = (
    form: { schedule_id: string; time: string; duration: string; day_id: string },
    onSuccess = emptyFunction,
    onFailure = emptyFunction
) => {
    return async (dispatch: ThunkDispatch<any, any, any>) => {
        const token = cookie.get("token");
        const instance = createAxiosInstance(token);

        try {
            await instance.post(endpoints.calendar.updateSingleScheduleData, form);

            const scheduleItem = { schedule_id: form.schedule_id, time: form.time, duration: +form.duration };

            dispatch(onUpdateScheduleItem(scheduleItem, form.day_id));

            onSuccess();
        } catch (e) {
            console.log(e);
            onFailure();
        }
    };
};

export const deleteScheduleItemAsync = (
    form: { scheduleId: string; dayId: string },
    onSuccess = emptyFunction,
    onFailure = emptyFunction
) => {
    return async (dispatch: ThunkDispatch<any, any, any>) => {
        const token = cookie.get("token");
        const instance = createAxiosInstance(token);

        try {
            await instance.delete(endpoints.calendar.deleteSingleScheduleData, {
                data: { schedule_id: form.scheduleId },
            });

            dispatch(onRemoveScheduleItem(form.scheduleId, form.dayId));
            onSuccess();
        } catch (e) {
            console.log(e);
            onFailure();
        }
    };
};

export const calendarUpdateRepeatWeeklySchedule = (
    repeatWeeklySchedule: boolean,
    onSuccess = emptyFunction,
    onFailure = emptyFunction
) => {
    return async (dispatch: DispatchType) => {
        const token = cookie.get("token");
        const instance = createAxiosInstance(token);

        try {
            await instance.post(endpoints.calendar.saveRepeatWeeklySchedule, {
                repeat_weekly_schedule: repeatWeeklySchedule ? 1 : 0,
            });

            dispatch(onRepeatWeeklyScheduleChange(repeatWeeklySchedule));

            onSuccess();
        } catch (e) {
            console.log(e);

            onFailure();
        }
    };
};

export const calendarSaveViewVideoSecondsAsync = (second: number, onComplete = emptyFunction) => {
    return async () => {
        const token = cookie.get("token");
        const instance = createAxiosInstance(token);

        try {
            await instance.post(endpoints.calendar.saveViewedVideoSeconds, { second });

            onComplete();
        } catch (e) {
            console.log(e);

            onComplete();
        }
    };
};

export const calendarSaveQuizTookSecondsAsync = (second: number, onComplete = emptyFunction) => {
    return async () => {
        const token = cookie.get("token");
        const instance = createAxiosInstance(token);

        try {
            await instance.post(endpoints.calendar.saveQuizTookSeconds, { second });

            onComplete();
        } catch (e) {
            console.log(e);

            onComplete();
        }
    };
};

export const calendarJoinedLiveEventSecondsAsync = (liveEventId: number, onComplete = emptyFunction) => {
    return async () => {
        const token = cookie.get("token");
        const instance = createAxiosInstance(token);

        try {
            await instance.post(endpoints.calendar.saveJoinedLiveEvent, { live_event_id: liveEventId });

            onComplete();
        } catch (e) {
            console.log(e);

            onComplete();
        }
    };
};
