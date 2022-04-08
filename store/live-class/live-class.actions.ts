import cookie from "js-cookie";

import { LiveEvent } from "@/interfaces/live-class.interfaces";
import { DispatchType } from "@/interfaces/redux.interfaces";
import { LIVE_CLASSES_CHANGE } from "@/store/live-class/live-class.action-types";
import { createAxiosInstance, endpoints } from "@/utils/api";
import { emptyFunction } from "@/utils/index";

export const onLiveClassesChange = (liveClasses: LiveEvent[]) => ({
    type: LIVE_CLASSES_CHANGE,
    payload: liveClasses,
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
