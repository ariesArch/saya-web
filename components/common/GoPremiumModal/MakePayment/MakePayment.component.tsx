import Image from "next/image";
import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Button from "@/components/common/Button/Button.component";
import MakePaymentSummary from "@/components/common/GoPremiumModal/MakePayment/Summary/Summary.component";
import PaymentSummary from "@/components/common/GoPremiumModal/PaymentSummary/PaymentSummary.component";
import SubscriptionPlanCard from "@/components/common/GoPremiumModal/SubscriptionPlanCard/SubscriptionPlanCard.component";
import { CheckPromoResponse, PaymentProvider, PaymentResponse } from "@/interfaces/payment.interfaces";
import { ReduxState } from "@/interfaces/redux.interfaces";
import ChevronDown from "@/public/icons/chevron-down.svg";
import ChevronLeft from "@/public/icons/chevron-left.svg";
import TickCircleIcon from "@/public/icons/tick-circle-inverted.svg";
import { fetchPaymentProvidersAsync, onInitializePaymentAsync } from "@/store/payment/payment.actions";

import * as styles from "./MakePayment.styles";

interface Props {
    isOpen: boolean;
    selectedPlanId: number;
    onGoBack: () => void;
}

const MakePayment: FC<Props> = ({ isOpen, selectedPlanId, onGoBack }) => {
    const { selectedPlan, paymentProviders } = useSelector((state: ReduxState) => ({
        selectedPlan: state.paymentState.subscriptionPlans.find((plan) => plan.id === selectedPlanId),
        paymentProviders: state.paymentState.providers,
    }));
    const dispatch = useDispatch();
    const allParsedProviders = parseProviders(paymentProviders);
    const [parsedProviders, setParsedProviders] = useState<ParsedProviders[]>([]);

    const [selectedMethod, setSelectedMethod] = useState<string>("");
    const [discount, setDiscount] = useState({ amount: 0, type: "AMOUNT", promoCode: "" });
    const [paymentResponse, setPaymentResponse] = useState<PaymentResponse | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const paymentData = selectedMethod.split("-");

    const onSelectMethod = (provider: string) => setSelectedMethod(provider);

    const showLessProviders = () => {
        if (paymentProviders.length > 3) setParsedProviders(allParsedProviders.slice(0, 3));
        if (paymentProviders.length === 3) setParsedProviders(allParsedProviders.slice(0, 2));
        if (paymentProviders.length < 3) setParsedProviders(allParsedProviders);
    };

    const onClickSeeMore = () => {
        if (parsedProviders.length < allParsedProviders.length) {
            setParsedProviders(allParsedProviders);
        } else {
            showLessProviders();
        }
    };

    const onClickPayNow = () => {
        setIsLoading(true);

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
    };

    const onPayNowSuccess = (data: PaymentResponse) => {
        setIsLoading(false);
        setPaymentResponse(data);
    };

    const onPayNowFailure = () => setIsLoading(false);

    const onGoBackFromSummary = () => setPaymentResponse(null);

    const onAddPromoCode = (data: CheckPromoResponse) => {
        setDiscount({ amount: data.amount, type: data.type, promoCode: data.promo_code });
    };

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
                price={selectedPlan?.final_price || selectedPlan?.price || 0}
                discount={discount}
                planId={selectedPlanId}
                onAddPromoCode={onAddPromoCode}
            />

            <div css={styles.buttonContainer}>
                <Button
                    variant="contained"
                    onClick={onClickPayNow}
                    loading={isLoading}
                    isDisabled={!selectedMethod}>
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
            <PaymentSummary {...paymentResponse} provider={paymentData[0]} method={paymentData[1]} />
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

export default MakePayment;
