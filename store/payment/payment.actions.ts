import cookie from "js-cookie";

import {
    CheckPromoResponse,
    PaymentResponse,
    PromotionCampaign,
    SubscriptionPlan,
} from "@/interfaces/payment.interfaces";
import { DispatchType } from "@/interfaces/redux.interfaces";
import {
    PAYMENT_MODAL_TOGGLE,
    PAYMENT_PROVIDERS_CHANGE,
    PAYMENT_SUCCESS_MODAL_TOGGLE,
    PROMOTION_CAMPAIGN_CHANGE,
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

export const onPaymentSuccessModalToggle = (isOpen: boolean) => ({
    type: PAYMENT_SUCCESS_MODAL_TOGGLE,
    payload: isOpen,
});

export const onPromotionCampaignChange = (data: PromotionCampaign) => ({
    type: PROMOTION_CAMPAIGN_CHANGE,
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
            const onepay_only_view = cookie.get("onepay_only_view");
            if (onepay_only_view) {
                data.data = data?.data.filter((pv) => pv.provider === "Onepay");
            }

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
    onFailure: (e: unknown) => void = emptyFunction
) => {
    return async () => {
        try {
            const token = cookie.get("token");
            const instance = createAxiosInstance(token);

            const { data } = await instance.post(endpoints.payment.initializePayment, form);

            onSuccess(data?.data as PaymentResponse);
        } catch (e) {
            console.log(e);
            onFailure(e);
        }
    };
};

export const onCheckPromoCodeAsync = (
    form: { promo_code: string; subscription_plan_id: number; provider_name: string },
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

export const fetchCampaignInfoAsync = (
    campaignId: string,
    onSuccess: () => void = emptyFunction,
    onFailure = emptyFunction
) => {
    return async (dispatch: DispatchType) => {
        try {
            const instance = createAxiosInstance();

            const { data } = await instance.get(`${endpoints.campaign.getLinkCampaign}?slug=${campaignId}`);

            dispatch(onPromotionCampaignChange(data.data as PromotionCampaign));

            onSuccess();
        } catch (e) {
            console.log(e);
            onFailure();
        }
    };
};

type SubmitCampaignPaymentForm = {
    link_campaign_subscription_plan_id: number;
    phone: number;
    provider: string;
    method: string;
    "g-recaptcha-response": string;
};

export const handleSubmitCampaignPaymentAsync = (
    form: SubmitCampaignPaymentForm,
    onSuccess: (data: PaymentResponse) => void = emptyFunction,
    onFailure: (e: unknown) => void = emptyFunction
) => {
    return async () => {
        try {
            const instance = createAxiosInstance();

            const { data } = await instance.post(endpoints.campaign.submitPayment, form);

            onSuccess(data?.data as PaymentResponse);
        } catch (e) {
            onFailure(e);
        }
    };
};
