import { FC, Fragment, useState } from "react";

import AddCouponModal from "@/components/common/GoPremiumModal/MakePayment/AddCouponModal/AddCouponModal.component";
import { CheckPromoResponse } from "@/interfaces/payment.interfaces";
import { formatCurrency } from "@/utils/index";

import * as styles from "./Summary.styles";

interface Props {
    totalPrice: number;
    discount: { amount: number; type: string };
    planId: number;
    onAddPromoCode: (data: CheckPromoResponse) => void;
}

const MakePaymentSummary: FC<Props> = ({ totalPrice, discount, planId, onAddPromoCode }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const onOpen = () => setIsModalOpen(true);
    const onClose = () => setIsModalOpen(false);

    return (
        <Fragment>
            <div css={styles.summary}>
                <div css={styles.summaryText}>
                    <span>Total</span>
                    <span>{formatCurrency(totalPrice)} MMK</span>
                </div>
                <div css={styles.summaryText}>
                    <span>
                        Discount <button onClick={onOpen}>[Add coupon code]</button>
                    </span>
                    <span>
                        -{" "}
                        {formatCurrency(
                            discount.type === "AMOUNT"
                                ? discount.amount
                                : totalPrice * (discount.amount / 100)
                        )}{" "}
                        MMK
                    </span>
                </div>
                <div css={styles.summaryText}>
                    <span>Grand Total</span>
                    <span>
                        {formatCurrency(
                            discount.type === "AMOUNT"
                                ? totalPrice - discount.amount
                                : totalPrice - totalPrice * (discount.amount / 100)
                        )}{" "}
                        MMK
                    </span>
                </div>
            </div>
            <AddCouponModal
                isOpen={isModalOpen}
                onClose={onClose}
                planId={planId}
                onAddPromoCode={onAddPromoCode}
            />
        </Fragment>
    );
};

export default MakePaymentSummary;
