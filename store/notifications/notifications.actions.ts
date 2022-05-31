import { parseISO } from "date-fns";
import cookie from "js-cookie";
import { ThunkDispatch } from "redux-thunk";

import { NotificationItem, NotificationsAds } from "@/interfaces/notifications.interfaces";
import { DispatchType } from "@/interfaces/redux.interfaces";
import {
    READ_NOTIFICATION,
    SET_NOTIFICATIONS,
    SET_NOTIFICATIONS_ADS,
} from "@/store/notifications/notifications.action-types";
import { createAxiosInstance, endpoints } from "@/utils/api";

export const setNotifications = (notifications: NotificationItem[]) => ({
    type: SET_NOTIFICATIONS,
    payload: notifications,
});

export const setNotificationsAds = (notificationsAds: NotificationsAds[]) => ({
    type: SET_NOTIFICATIONS_ADS,
    payload: notificationsAds,
});

export const readNotification = (notificationId: string) => ({
    type: READ_NOTIFICATION,
    payload: notificationId,
});

export const getAllNotificationsAsync = () => {
    return async (dispatch: DispatchType) => {
        const token = cookie.get("token");

        const instance = createAxiosInstance(token);

        try {
            const { data } = await instance.get(endpoints.user.getNotifications);

            dispatch(
                setNotifications(
                    (data?.data as NotificationItem[]).sort(
                        (a, b) => parseISO(b.created_at).getTime() - parseISO(a.created_at).getTime()
                    )
                )
            );
        } catch (e) {
            console.log(e);
        }
    };
};

export const readNotificationAsync = (notificationId: string) => {
    return async (dispatch: ThunkDispatch<any, any, any>) => {
        const token = cookie.get("token");

        const instance = createAxiosInstance(token);

        try {
            await instance.post(endpoints.user.getSingleNotification, { notification_id: notificationId });

            dispatch(readNotification(notificationId));
        } catch (e) {
            console.log(e);
        }
    };
};

export const getNotificationsAdsAsync = () => {
    return async (dispatch: DispatchType) => {
        const token = cookie.get("token");

        const instance = createAxiosInstance(token);

        try {
            const { data } = await instance.post(endpoints.ads.getAds, {
                screen_type: "notification_screen",
            });

            dispatch(setNotificationsAds(data?.data as NotificationsAds[]));
        } catch (e) {
            console.log(e);
        }
    };
};

export const updateFirebaseTokenAsync = (firebaseToken: string) => {
    return async () => {
        const token = cookie.get("token");

        const instance = createAxiosInstance(token);

        try {
            await instance.post(endpoints.user.updateFirebaseToken, { firebase_token: firebaseToken });
        } catch (e) {
            console.log(e);
        }
    };
};
