import { ActionType, PaymentState } from "@/interfaces/redux.interfaces";
import {
    PAYMENT_MODAL_TOGGLE,
    PAYMENT_PROVIDERS_CHANGE,
    SUBSCRIPTION_PLANS_CHANGE,
} from "@/store/payment/payment.action-types";

const initialState: PaymentState = {
    subscriptionPlans: [],
    providers: [],
    isPaymentModalOpen: false,
};

const paymentReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case SUBSCRIPTION_PLANS_CHANGE:
            return { ...state, subscriptionPlans: action.payload };
        case PAYMENT_PROVIDERS_CHANGE:
            return { ...state, providers: action.payload };
        case PAYMENT_MODAL_TOGGLE:
            return { ...state, isPaymentModalOpen: action.payload };
        default:
            return state;
    }
};

export default paymentReducer;