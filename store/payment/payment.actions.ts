import cookie from "js-cookie";

import { SubscriptionPlan } from "@/interfaces/payment.interfaces";
import { DispatchType } from "@/interfaces/redux.interfaces";
import { PAYMENT_PROVIDERS_CHANGE, SUBSCRIPTION_PLANS_CHANGE } from "@/store/payment/payment.action-types";
import { createAxiosInstance, endpoints } from "@/utils/api";

export const onSubscriptionPlansChange = (data: SubscriptionPlan[]) => ({
    type: SUBSCRIPTION_PLANS_CHANGE,
    payload: data,
});

export const onPaymentProvidersChange = (data: any) => ({
    type: PAYMENT_PROVIDERS_CHANGE,
    payload: data,
});

export const fetchSubscriptionPlansAsync = () => {
    return async (dispatch: DispatchType) => {
        try {
            const token = cookie.get("token");
            const instance = createAxiosInstance(token);

            const { data } = await instance.get(endpoints.subscriptionPlans.getSubscriptionPlans);

            dispatch(onSubscriptionPlansChange(data.data as SubscriptionPlan[]));
        } catch (e) {
            console.log(e);
        }
    };
};

export const fetchPaymentProvidersAsync = () => {
    return async (dispatch: DispatchType) => {
        try {
            const token = cookie.get("token");
            const instance = createAxiosInstance(token);

            const { data } = await instance.get(endpoints.payment.getPaymentProviders);

            dispatch(onPaymentProvidersChange(data?.data));
        } catch (e) {
            console.log(e);
        }
    };
};
