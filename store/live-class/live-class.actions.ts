import cookie from "js-cookie";

import { LiveEvent } from "@/interfaces/live-class.interfaces";
import { DispatchType } from "@/interfaces/redux.interfaces";
import {
    LIVE_CLASS_NOTIFY_TOGGLE,
    LIVE_CLASSES_CHANGE,
    REMOVE_LIVE_CLASS,
    UPDATE_LIVE_CLASS,
} from "@/store/live-class/live-class.action-types";
import { createAxiosInstance, endpoints } from "@/utils/api";
import { emptyFunction } from "@/utils/index";

export const onLiveClassesChange = (liveClasses: LiveEvent[]) => ({
    type: LIVE_CLASSES_CHANGE,
    payload: liveClasses,
});

export const onUpdateClass = (liveClass: LiveEvent) => ({
    type: UPDATE_LIVE_CLASS,
    payload: liveClass,
});

export const onRemoveClass = (id: number) => ({
    type: REMOVE_LIVE_CLASS,
    payload: { id },
});

export const onLiveClassNotifyToggle = (uuid: string) => ({
    type: LIVE_CLASS_NOTIFY_TOGGLE,
    payload: { uuid },
});

export const onLiveClassesFetchAsync = (onSuccess = emptyFunction, onFailure = emptyFunction) => {
    return async (dispatch: DispatchType) => {
        const token = cookie.get("token");
        const instance = createAxiosInstance(token);

        try {
            const { data } = await instance.get(endpoints.liveEvents.getAllLiveEvents);

            dispatch(onLiveClassesChange(data?.data as LiveEvent[]));

            onSuccess();
        } catch (e) {
            console.log(e);
            onFailure();
        }
    };
};

export const onLiveClassNotifyToggleAsync = (
    data: { uuid: string; is_notify: boolean },
    onComplete = emptyFunction
) => {
    return async (dispatch: DispatchType) => {
        const token = cookie.get("token");
        const instance = createAxiosInstance(token);

        try {
            await instance.post(
                data.is_notify ? endpoints.user.unnotifyLiveEvent : endpoints.user.notifyLiveEvent,
                { live_event_id: data.uuid }
            );

            dispatch(onLiveClassNotifyToggle(data.uuid));

            onComplete();
        } catch (e) {
            console.log(e);
            onComplete();
        }
    };
};
