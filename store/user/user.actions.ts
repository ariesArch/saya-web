import { differenceInSeconds } from "date-fns";
import cookie from "js-cookie";

import { DispatchType } from "@/interfaces/redux.interfaces";
import { UserData } from "@/interfaces/user.interfaces";
import { onEnrolledCoursesChange } from "@/store/courses/courses.actions";
import { USER_DATA_CHANGE } from "@/store/user/user.action-types";
import { createAxiosInstance, endpoints } from "@/utils/api";
import { emptyFunction } from "@/utils/index";

export const onUserDataChange = (data: UserData | Record<string, any>) => ({
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
    onSuccess: () => void = emptyFunction,
    onFailure: (error: unknown) => void = emptyFunction
) => {
    return async () => {
        try {
            const instance = createAxiosInstance();

            const { data } = await instance.post(endpoints.auth.verifyLogin, form);

            const { access_token, expires_in } = data;

            cookie.set("token", access_token as string, { expires: expires_in });

            // dispatch(onUserDataChange({ ...rest, is_new_user } as UserData));

            onSuccess();
        } catch (e) {
            onFailure(e);
        }
    };
};

export const userLogoutAsync = (
    onSuccess = emptyFunction,
    onFailure: (error: unknown) => void = emptyFunction
) => {
    return async (dispatch: DispatchType) => {
        try {
            const token = cookie.get("token");

            const instance = createAxiosInstance(token);

            await instance.get(endpoints.user.logout);

            cookie.remove("token");

            onSuccess();

            dispatch(onUserDataChange({}));
            dispatch(onEnrolledCoursesChange([]));
        } catch (e) {
            console.log(e);
            onFailure(e);
        }
    };
};

export const userUpdateProfileAsync = (
    form: {
        name: string;
        email: string;
        gender: string;
        image?: string;
    },
    onSuccess: () => void = emptyFunction,
    onFailure: () => void = emptyFunction
) => {
    return async (dispatch: DispatchType) => {
        try {
            const token = cookie.get("token");

            // image file object can only be sent by appending to formData
            const formData = new FormData();
            if (form.name) formData.append("name", form.name);
            if (form.email) formData.append("email", form.email);
            if (form.gender) formData.append("gender", form.gender);
            if (form.image) formData.append("image", form.image);

            const instance = createAxiosInstance(token);

            const { data } = await instance.post(endpoints.user.updateProfile, formData);

            onSuccess();

            const changedData: Partial<UserData> = {
                name: form.name,
                gender: form.gender as "male" | "female",
                email: form.email,
            };
            if (form.image) changedData.photo = URL.createObjectURL(form.image);

            // response data is sometimes not correct, especially for the image
            dispatch(
                onUserDataChange({
                    ...data,
                    ...changedData,
                } as UserData)
            );
        } catch (e) {
            console.log(e);
            onFailure();
        }
    };
};
