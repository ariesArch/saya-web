import { PaymentProvider, SubscriptionPlan } from "@/interfaces/payment.interfaces";
import { ActionType, PaymentState } from "@/interfaces/redux.interfaces";
import {
    PAYMENT_MODAL_TOGGLE,
    PAYMENT_PROVIDERS_CHANGE,
    PAYMENT_SUCCESS_MODAL_TOGGLE,
    SUBSCRIPTION_PLANS_CHANGE,
} from "@/store/payment/payment.action-types";

const initialState: PaymentState = {
    subscriptionPlans: [],
    providers: [],
    isPaymentModalOpen: false,
    isPaymentSuccessModalOpen: false,
};

const paymentReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case SUBSCRIPTION_PLANS_CHANGE:
            return {
                ...state,
                subscriptionPlans: (action.payload as SubscriptionPlan[]).sort((a, b) => a.month - b.month),
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
        default:
            return state;
    }
};

export default paymentReducer;
