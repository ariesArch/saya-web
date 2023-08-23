import Image from "next/image";
import { ChangeEvent, FC, memo, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";

import Button from "@/components/common/Button/Button.component";
import MakePaymentSummary from "@/components/common/GoPremiumModal/MakePayment/Summary/Summary.component";
import PaymentSummary from "@/components/common/GoPremiumModal/PaymentSummary/PaymentSummary.component";
import SubscriptionPlanCard from "@/components/common/GoPremiumModal/SubscriptionPlanCard/SubscriptionPlanCard.component";
import { GoPremiumModalContext } from "@/components/common/GoPremiumModal/utils";
import PhoneNumberInput from "@/components/common/PhoneNumberInput/PhoneNumberInput.component";
import { CheckPromoResponse, PaymentProvider, PaymentResponse } from "@/interfaces/payment.interfaces";
import { ReduxState } from "@/interfaces/redux.interfaces";
import ChevronDown from "@/public/icons/chevron-down.svg";
import ChevronLeft from "@/public/icons/chevron-left.svg";
import TickCircleIcon from "@/public/icons/tick-circle-inverted.svg";
import {
    fetchPaymentProvidersAsync,
    handleSubmitCampaignPaymentAsync,
    onInitializePaymentAsync,
} from "@/store/payment/payment.actions";

import * as styles from "./MakePayment.styles";

interface Props {
    isOpen: boolean;
    selectedPlanId: number;
    onGoBack: () => void;
}

const MakePayment: FC<Props> = ({ isOpen, selectedPlanId, onGoBack }) => {
    const { isCampaign } = useContext(GoPremiumModalContext);
    const { selectedPlan, paymentProviders } = useSelector((state: ReduxState) => ({
        selectedPlan: (isCampaign
            ? state.paymentState.promotionCampaign.link_campaign_subscription_plans
            : state.paymentState.subscriptionPlans
        ).find((plan) => plan.id === selectedPlanId),
        paymentProviders: state.paymentState.providers,
    }));
    const dispatch = useDispatch();

    const allParsedProviders = useMemo(() => parseProviders(paymentProviders), [paymentProviders]);

    const [parsedProviders, setParsedProviders] = useState<ParsedProviders[]>([]);
    const [formatedPhone, setFormatedPhone] = useState<number>(null);

    const [selectedMethod, setSelectedMethod] = useState<string>("");
    const [discount, setDiscount] = useState({
        amount: selectedPlan?.promotion_price || 0,
        type: selectedPlan?.is_percentage ? "PERCENT" : "AMOUNT",
        promoCode: "",
    });

    const [paymentResponse, setPaymentResponse] = useState<PaymentResponse | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const [phone, setPhone] = useState("");
    const { executeRecaptcha } = useGoogleReCaptcha();

    const onChangeFormatedPhone = (value: number) => {
        setFormatedPhone(value);
    };

    const onPhoneNumberChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setPhone(e.target.value);
    }, []);

    const paymentData = useMemo(() => selectedMethod.split("-"), [selectedMethod]);

    const onSelectMethod = (provider: string) => setSelectedMethod(provider);

    const showLessProviders = useCallback(() => {
        if (paymentProviders.length > 3) setParsedProviders(allParsedProviders.slice(0, 3));
        if (paymentProviders.length === 3) setParsedProviders(allParsedProviders.slice(0, 2));
        if (paymentProviders.length < 3) setParsedProviders(allParsedProviders);
    }, [allParsedProviders, paymentProviders.length]);

    const onClickSeeMore = useCallback(() => {
        if (parsedProviders.length < allParsedProviders.length) {
            setParsedProviders(allParsedProviders);
        } else {
            showLessProviders();
        }
    }, [allParsedProviders, parsedProviders.length, showLessProviders]);

    const onClickPayNow = useCallback(async () => {
        setIsLoading(true);

        if (!isCampaign) {
            dispatch(
                onInitializePaymentAsync(
                    {
                        plan_id: selectedPlanId,
                        provider: paymentData[0],
                        method: paymentData[1],
                        promo_code: discount.promoCode,
                    },
                    onPayNowSuccess,
                    onPayNowFailure
                )
            );

            return;
        }

        if (!executeRecaptcha) {
            setIsLoading(false);
            return;
        }

        const token = await executeRecaptcha("submitLinkCampaignPayment");

        dispatch(
            handleSubmitCampaignPaymentAsync(
                {
                    phone: formatedPhone,
                    link_campaign_subscription_plan_id: selectedPlanId,
                    provider: paymentData[0],
                    method: paymentData[1],
                    "g-recaptcha-response": token,
                },
                onPayNowSuccess,
                onPayNowFailure
            )
        );
    }, [
        discount.promoCode,
        dispatch,
        executeRecaptcha,
        isCampaign,
        paymentData,
        formatedPhone,
        selectedPlanId,
    ]);

    const onPayNowSuccess = useCallback((data: PaymentResponse) => {
        setIsLoading(false);
        setPaymentResponse(data);
    }, []);

    const onPayNowFailure = useCallback((e: any) => {
        setIsLoading(false);

        if (!e.response.data.error) return;

        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        toast(e.response.data.error, { type: "error" });
    }, []);

    const onGoBackFromSummary = () => setPaymentResponse(null);

    const onAddPromoCode = useCallback((data: CheckPromoResponse) => {
        setDiscount({ amount: data.amount, type: data.type, promoCode: data.promo_code });
    }, []);

    useEffect(() => {
        if (isOpen && paymentProviders.length === 0) {
            dispatch(fetchPaymentProvidersAsync());
        }
    }, [dispatch, isOpen, paymentProviders.length]);

    useEffect(() => {
        if (!paymentProviders.length) return;
        showLessProviders();
    }, [paymentProviders]);

    return !paymentResponse ? (
        <div css={styles.container}>
            <div css={styles.header}>
                <button css={styles.backBtn} onClick={onGoBack}>
                    <ChevronLeft />
                    Back
                </button>
                <h1 css={styles.heading}>Make Payment</h1>
            </div>

            <div css={styles.cardContainer}>
                {selectedPlan && <SubscriptionPlanCard data={selectedPlan} showBadge={false} />}
            </div>

            {isCampaign && (
                <div css={styles.phoneInputContainer}>
                    <label css={styles.label} htmlFor="phone-number-input">
                        Enter your phone number
                    </label>
                    <PhoneNumberInput
                        css={styles.phoneInput}
                        value={phone}
                        id="phone-number-input"
                        formatedPhone={onChangeFormatedPhone}
                        onChange={onPhoneNumberChange}
                    />

                    <span css={styles.info}>
                        SAYA app တွင် အသုံးပြုရန်ရည်ရွယ်ထားသော ဖုန်းနံပါတ်ကိုသာ ရိုက်ထည့်‌ပါ။
                    </span>

                    <ToastContainer autoClose={2000} />
                </div>
            )}

            <div css={styles.paymentMethods}>
                <span css={styles.paymentHeading}>Select Payment Method</span>

                {parsedProviders.map(({ provider, image_url, type }) => (
                    <div
                        key={`${provider}-${type}`}
                        css={styles.paymentItem(selectedMethod === `${provider}-${type}`)}
                        onClick={() => onSelectMethod(`${provider}-${type}`)}>
                        {selectedMethod === `${provider}-${type}` ? (
                            <TickCircleIcon />
                        ) : (
                            <Image src={image_url} width={30} height={30} alt="Provider Icon" />
                        )}

                        <span>
                            {provider} ({type})
                        </span>
                    </div>
                ))}

                {allParsedProviders.length >= 3 && (
                    <a
                        css={styles.moreOptions(parsedProviders.length < allParsedProviders.length)}
                        onClick={onClickSeeMore}>
                        {parsedProviders.length < allParsedProviders.length
                            ? "More Payment Options"
                            : "Show Less"}
                        <ChevronDown />
                    </a>
                )}
            </div>

            <MakePaymentSummary
                totalPrice={selectedPlan?.price || 0}
                discount={discount}
                planId={selectedPlanId}
                onAddPromoCode={onAddPromoCode}
            />

            <div css={styles.buttonContainer}>
                <Button
                    variant="contained"
                    onClick={onClickPayNow as any}
                    loading={isLoading}
                    isDisabled={isCampaign ? !phone || !selectedMethod : !selectedMethod}>
                    Pay Now
                </Button>
            </div>
        </div>
    ) : (
        <div css={styles.summaryContainer}>
            <button css={styles.summaryBackBtn} onClick={onGoBackFromSummary}>
                <ChevronLeft />
                Back
            </button>
            <PaymentSummary
                {...paymentResponse}
                provider={paymentData[0]}
                method={paymentData[1]}
                image={
                    allParsedProviders.find(({ provider }) => provider === paymentData[0])?.image_url || ""
                }
            />
        </div>
    );
};

interface ParsedProviders extends PaymentProvider {
    type: string;
}

const parseProviders = (providers: PaymentProvider[]): ParsedProviders[] => {
    const parsedProviders: ParsedProviders[] = [];

    providers.forEach((item) =>
        item.methods.forEach((method) => method !== "PWA" && parsedProviders.push({ ...item, type: method }))
    );

    return parsedProviders;
};

export default memo(MakePayment);
