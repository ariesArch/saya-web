import { differenceInSeconds } from "date-fns";
import cookie from "js-cookie";

import { UserData } from "@/interfaces/user.interfaces";
import { USER_DATA_CHANGE } from "@/store/user/user.action-types";
import { createAxiosInstance, endpoints } from "@/utils/api";
import { emptyFunction } from "@/utils/index";

export const onUserDataChange = (data: UserData) => ({
    type: USER_DATA_CHANGE,
    payload: data,
});

export const userLoginAsync = (
    form: { phone: string },
    onSuccess: (expiresAt: number) => void = emptyFunction,
    onFailure: (error: unknown) => void = emptyFunction
) => {
    return async () => {
        try {
            const instance = createAxiosInstance();

            const { data } = await instance.post(endpoints.auth.login, {
                ...form,
                platform: 0,
            });
            onSuccess(differenceInSeconds(new Date(data?.otp_expires_at * 1000), new Date()));
        } catch (e) {
            onFailure(e);
        }
    };
};

export const userVerifyLoginAsync = (
    form: { phone: string; otp: string },
    onSuccess: (isNewUser: boolean) => void = emptyFunction,
    onFailure: (error: unknown) => void = emptyFunction
) => {
    return async () => {
        try {
            const instance = createAxiosInstance();

            const { data } = await instance.post(endpoints.auth.verifyLogin, form);

            const { access_token, expires_in, is_new_user } = data;

            cookie.set("token", access_token as string, { expires: expires_in });

            // dispatch(onUserDataChange({ ...rest, is_new_user } as UserData));

            onSuccess(is_new_user as boolean);
        } catch (e) {
            onFailure(e);
        }
    };
};

export const userLogoutAsync = (
    onSuccess = emptyFunction,
    onFailure: (error: unknown) => void = emptyFunction
) => {
    return async () => {
        try {
            const token = cookie.get("token");

            const instance = createAxiosInstance(token);

            await instance.get(endpoints.user.logout);

            cookie.remove("token");

            onSuccess();
        } catch (e) {
            console.log(e);
            onFailure(e);
        }
    };
};
