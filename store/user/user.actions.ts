import { differenceInSeconds } from "date-fns";
import cookie from "js-cookie";
import localforage from "localforage";

import { DispatchType } from "@/interfaces/redux.interfaces";
import { SurveyData, UserData } from "@/interfaces/user.interfaces";
import { onEnrolledCoursesChange } from "@/store/courses/courses.actions";
import { SURVEY_DATA_CHANGE, USER_DATA_CHANGE, USER_DATA_UPDATE } from "@/store/user/user.action-types";
import { createAxiosInstance, endpoints } from "@/utils/api";
import { emptyFunction } from "@/utils/index";

export const onUserDataChange = (data: UserData | Record<string, any>) => ({
    type: USER_DATA_CHANGE,
    payload: data,
});

export const onUserDataUpdate = (data: Partial<UserData>) => ({
    type: USER_DATA_UPDATE,
    payload: data,
});

export const onSurveyDataChange = (data: SurveyData | Record<string, never>) => ({
    type: SURVEY_DATA_CHANGE,
    payload: data,
});

export const userLoginAsync = (
    form: { phone: number; "g-recaptcha-response": string },
    onSuccess: (expiresAt: number) => void = emptyFunction,
    onFailure: (error: unknown) => void = emptyFunction
) => {
    return async () => {
        try {
            const instance = createAxiosInstance();

            const { data } = await instance.post(endpoints.auth.login, {
                ...form,
                platform: 1,
            });
            onSuccess(differenceInSeconds(new Date(data?.otp_expires_at * 1000), new Date()));
        } catch (e) {
            onFailure(e);
        }
    };
};

export const userVerifyLoginAsync = (
    form: { phone: number; otp: string; onepay_only_view?: boolean; "g-recaptcha-response": string },
    onSuccess: () => void = emptyFunction,
    onFailure: (error: unknown) => void = emptyFunction
) => {
    return async () => {
        cookie.remove("onepay_only_view");
        try {
            const instance = createAxiosInstance();

            const { data } = await instance.post(endpoints.auth.verifyLogin, { ...form, platform: "web" });

            const { access_token, expires_in } = data;

            cookie.set("token", access_token as string, { expires: expires_in });
            if (form.onepay_only_view) {
                cookie.set("onepay_only_view", "true" as string, { expires: expires_in });
            }
            await localforage.removeItem("fcm_token");

            // dispatch(onUserDataChange({ ...rest, is_new_user } as UserData));

            onSuccess();
        } catch (e) {
            onFailure(e);
        }
    };
};

export const fetchUserDataAsync = () => {
    return async (dispatch: DispatchType) => {
        const token = cookie.get("token");
        const instance = createAxiosInstance(token);

        try {
            const { data } = await instance.get(endpoints.user.getProfile);

            dispatch(onUserDataChange(data as UserData));
        } catch (e) {
            console.log(e);
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
            await localforage.removeItem("fcm_token");

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
        ageGroupId?: string;
        positionId?: string;
        purposeId?: string;
        levelId?: string;
    },
    onSuccess: () => void = emptyFunction,
    onFailure: () => void = emptyFunction
) => {
    return async (dispatch: DispatchType) => {
        const token = cookie.get("token");
        const instance = createAxiosInstance(token);

        try {
            // image file object can only be sent by appending to formData
            const formData = new FormData();
            if (form.name) formData.append("name", form.name);
            if (form.email) formData.append("email", form.email);
            if (form.gender) formData.append("gender", form.gender);
            if (form.image) formData.append("image", form.image);

            if (form.ageGroupId) formData.append("age_group_id", form.ageGroupId);
            if (form.positionId) formData.append("position_id", form.positionId);
            if (form.purposeId) formData.append("practicing_for_id", form.purposeId);
            if (form.levelId) formData.append("level_id", form.levelId);

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

export const updatePhoneNumberAsync = (
    phone: number,
    onSuccess: (expiresAt: number) => void = emptyFunction,
    onFailure: (error: unknown) => void = emptyFunction
) => {
    return async () => {
        const token = cookie.get("token");
        const instance = createAxiosInstance(token);

        try {
            const { data } = await instance.post(endpoints.user.updatePhoneNumber, { phone });

            onSuccess(differenceInSeconds(new Date(data?.otp_expired * 1000), new Date()));
        } catch (e) {
            console.log(e);
            onFailure(e);
        }
    };
};

export const updatePhoneVerifyAsync = (
    form: { phone: number; otp: string },
    onSuccess: () => void = emptyFunction,
    onFailure: (error: unknown) => void = emptyFunction
) => {
    return async (dispatch: DispatchType) => {
        const token = cookie.get("token");
        const instance = createAxiosInstance(token);

        try {
            await instance.post(endpoints.user.verifyUpdatePhoneNumber, { otp: form.otp });

            dispatch(onUserDataUpdate({ phone: form.phone }));

            onSuccess();
        } catch (e) {
            onFailure(e);
        }
    };
};

export const getUserSurveyDataAsync = () => {
    return async (dispatch: DispatchType) => {
        const token = cookie.get("token");
        const instance = createAxiosInstance(token);

        try {
            const { data } = await instance.get(endpoints.user.getDataForProfileUpdate);

            dispatch(onSurveyDataChange(data?.data as SurveyData));
        } catch (e) {
            console.log(e);
        }
    };
};
