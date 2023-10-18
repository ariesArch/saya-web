import { PaymentIcon, PaymentProvider, SubscriptionPlan } from "@/interfaces/payment.interfaces";
import { ActionType, PaymentState } from "@/interfaces/redux.interfaces";
import {
    PAYMENT_ICONS_CHANGE,
    PAYMENT_MODAL_TOGGLE,
    PAYMENT_PROVIDERS_CHANGE,
    PAYMENT_SUCCESS_MODAL_TOGGLE,
    PROMOTION_CAMPAIGN_CHANGE,
    SUBSCRIPTION_PLANS_CHANGE,
} from "@/store/payment/payment.action-types";

const initialState: PaymentState = {
    subscriptionPlans: [],
    providers: [],
    isPaymentModalOpen: false,
    isPaymentSuccessModalOpen: false,
    promotionCampaign: {},
    paymentIcons: [],
};

const paymentReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case SUBSCRIPTION_PLANS_CHANGE:
            return {
                ...state,
                // subscriptionPlans: (action.payload as SubscriptionPlan[]).sort((a, b) => a.month - b.month),
                subscriptionPlans: action.payload as SubscriptionPlan[],
            };
        case PAYMENT_PROVIDERS_CHANGE:
            return {
                ...state,
                providers: (action.payload as PaymentProvider[]).sort((a, b) => a.order - b.order),
            };
        case PAYMENT_MODAL_TOGGLE:
            return { ...state, isPaymentModalOpen: action.payload };
        case PAYMENT_SUCCESS_MODAL_TOGGLE:
            return { ...state, isPaymentSuccessModalOpen: action.payload };
        case PROMOTION_CAMPAIGN_CHANGE:
            return { ...state, promotionCampaign: action.payload };
        case PAYMENT_ICONS_CHANGE:
            return {
                ...state,
                paymentIcons: (action.payload as PaymentIcon[]).sort((a, b) => a.order - b.order),
            };
        default:
            return state;
    }
};

export default paymentReducer;
