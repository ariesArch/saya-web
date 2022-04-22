import Image from "next/image";
import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Button from "@/components/common/Button/Button.component";
import SubscriptionPlanCard from "@/components/common/GoPremiumModal/SubscriptionPlanCard/SubscriptionPlanCard.component";
import { PaymentProvider } from "@/interfaces/payment.interfaces";
import { ReduxState } from "@/interfaces/redux.interfaces";
import ChevronDown from "@/public/icons/chevron-down.svg";
import ChevronLeft from "@/public/icons/chevron-left.svg";
import TickCircleIcon from "@/public/icons/tick-circle-inverted.svg";
import { fetchPaymentProvidersAsync, onInitializePaymentAsync } from "@/store/payment/payment.actions";
import { formatCurrency } from "@/utils/index";

import * as styles from "./MakePayment.styles";

interface Props {
    selectedPlanId: number;
    onGoBack: () => void;
}

const MakePayment: FC<Props> = ({ selectedPlanId, onGoBack }) => {
    const { selectedPlan, paymentProviders } = useSelector((state: ReduxState) => ({
        selectedPlan: state.paymentState.subscriptionPlans.find((plan) => plan.id === selectedPlanId),
        paymentProviders: state.paymentState.providers,
    }));
    const dispatch = useDispatch();
    const allParsedProviders = parseProviders(paymentProviders);
    const [parsedProviders, setParsedProviders] = useState<ParsedProviders[]>([]);

    const [selectedMethod, setSelectedMethod] = useState<string>("");
    const [discount] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

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
        const paymentData = selectedMethod.split("-");

        setIsLoading(true);

        dispatch(
            onInitializePaymentAsync(
                {
                    plan_id: selectedPlanId,
                    provider: paymentData[0],
                    method: paymentData[1],
                    promo_code: "",
                },
                onPayNowSuccess,
                onPayNowFailure
            )
        );
    };

    const onPayNowSuccess = (data: any) => {
        setIsLoading(false);
        console.log(data);
    };

    const onPayNowFailure = () => setIsLoading(false);

    useEffect(() => {
        dispatch(fetchPaymentProvidersAsync());
    }, [dispatch]);

    useEffect(() => {
        if (!paymentProviders.length) return;
        showLessProviders();
    }, [paymentProviders]);

    return (
        <div css={styles.container}>
            <div css={styles.header}>
                <a css={styles.backBtn} onClick={onGoBack}>
                    <ChevronLeft />
                    Back
                </a>
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
                            <Image src={image_url} width={30} height={30} />
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
                            : "Less Payment Options"}
                        <ChevronDown />
                    </a>
                )}
            </div>

            <div css={styles.summary}>
                <div css={styles.summaryText}>
                    <span>Total</span>
                    <span>{formatCurrency(selectedPlan?.final_price || selectedPlan?.price || 0)} MMK</span>
                </div>
                <div css={styles.summaryText}>
                    <span>
                        Discount <a>[Add coupon code]</a>
                    </span>
                    <span>- {formatCurrency(discount)} MMK</span>
                </div>
                <div css={styles.summaryText}>
                    <span>Grand Total</span>
                    <span>
                        {formatCurrency((selectedPlan?.final_price || selectedPlan?.price || 0) - discount)}{" "}
                        MMK
                    </span>
                </div>
            </div>

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
