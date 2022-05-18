import cookie from "js-cookie";

import { createAxiosInstance, endpoints } from "@/utils/api";

export const getAllNotifications = () => {
    return async () => {
        const token = cookie.get("token");

        const instance = createAxiosInstance(token);

        try {
            const { data } = await instance.post(endpoints.ads.getAds, {
                screen_type: "notification_screen",
            });
            console.log(data);
        } catch (e) {
            console.log(e);
        }
    };
};
