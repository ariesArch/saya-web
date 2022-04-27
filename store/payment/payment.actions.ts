import cookie from "js-cookie";

import { CheckPromoResponse, PaymentResponse, SubscriptionPlan } from "@/interfaces/payment.interfaces";
import { DispatchType } from "@/interfaces/redux.interfaces";
import {
    PAYMENT_MODAL_TOGGLE,
    PAYMENT_PROVIDERS_CHANGE,
    SUBSCRIPTION_PLANS_CHANGE,
} from "@/store/payment/payment.action-types";
import { createAxiosInstance, endpoints } from "@/utils/api";
import { emptyFunction } from "@/utils/index";

export const onSubscriptionPlansChange = (data: SubscriptionPlan[]) => ({
    type: SUBSCRIPTION_PLANS_CHANGE,
    payload: data,
});

export const onPaymentProvidersChange = (data: any) => ({
    type: PAYMENT_PROVIDERS_CHANGE,
    payload: data,
});

export const onPaymentModalToggle = (isOpen: boolean) => ({
    type: PAYMENT_MODAL_TOGGLE,
    payload: isOpen,
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

export const onInitializePaymentAsync = (
    form: {
        plan_id: number;
        provider: string;
        method: string;
        promo_code: string;
    },
    onSuccess: (data: PaymentResponse) => void = emptyFunction,
    onFailure = emptyFunction
) => {
    return async () => {
        try {
            const token = cookie.get("token");
            const instance = createAxiosInstance(token);

            const { data } = await instance.post(endpoints.payment.initializePayment, form);

            onSuccess(data?.data as PaymentResponse);
        } catch (e) {
            console.log(e);
            onFailure();
        }
    };
};

export const onCheckPromoCodeAsync = (
    form: { promo_code: string; subscription_plan_id: number },
    onSuccess: (data: CheckPromoResponse) => void = emptyFunction,
    onFailure = emptyFunction
) => {
    return async () => {
        try {
            const token = cookie.get("token");
            const instance = createAxiosInstance(token);

            const { data } = await instance.post(endpoints.promotion.checkPromoCode, form);

            onSuccess(data as CheckPromoResponse);
        } catch (e) {
            console.log(e);
            onFailure();
        }
    };
};
