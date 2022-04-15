import Image from "next/image";
import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Button from "@/components/common/Button/Button.component";
import SubscriptionPlanCard from "@/components/common/GoPremiumModal/SubscriptionPlanCard/SubscriptionPlanCard.component";
import { ReduxState } from "@/interfaces/redux.interfaces";
import ChevronDown from "@/public/icons/chevron-down.svg";
import ChevronLeft from "@/public/icons/chevron-left.svg";
import TickCircleIcon from "@/public/icons/tick-circle-inverted.svg";
import { fetchPaymentProvidersAsync } from "@/store/payment/payment.actions";
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

    const [selectedMethod, setSelectedMethod] = useState<string>("");
    const [discount] = useState(0);
    const onSelectMethod = (provider: string) => setSelectedMethod(provider);

    useEffect(() => {
        dispatch(fetchPaymentProvidersAsync());
    }, [dispatch]);

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

                {paymentProviders.map(({ provider, image_url }) => (
                    <div
                        key={provider}
                        css={styles.paymentItem(selectedMethod === provider)}
                        onClick={() => onSelectMethod(provider)}>
                        {selectedMethod === provider ? (
                            <TickCircleIcon />
                        ) : (
                            <Image src={image_url} width={30} height={30} />
                        )}

                        <span>{provider}</span>
                    </div>
                ))}

                <a css={styles.moreOptions}>
                    More Payment Options
                    <ChevronDown />
                </a>
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
                <Button variant="contained">Pay Now</Button>
            </div>
        </div>
    );
};

export default MakePayment;
