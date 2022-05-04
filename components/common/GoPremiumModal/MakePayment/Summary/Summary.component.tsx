import { FC, Fragment, useState } from "react";

import AddCouponModal from "@/components/common/GoPremiumModal/MakePayment/AddCouponModal/AddCouponModal.component";
import { CheckPromoResponse } from "@/interfaces/payment.interfaces";
import { formatCurrency } from "@/utils/index";

import * as styles from "./Summary.styles";

interface Props {
    price: number;
    discount: { amount: number; type: string };
    planId: number;
    onAddPromoCode: (data: CheckPromoResponse) => void;
}

const MakePaymentSummary: FC<Props> = ({ price, discount, planId, onAddPromoCode }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const onOpen = () => setIsModalOpen(true);
    const onClose = () => setIsModalOpen(false);

    return (
        <Fragment>
            <div css={styles.summary}>
                <div css={styles.summaryText}>
                    <span>Total</span>
                    <span>{formatCurrency(price)} MMK</span>
                </div>
                <div css={styles.summaryText}>
                    <span>
                        Discount <button onClick={onOpen}>[Add coupon code]</button>
                    </span>
                    <span>
                        - {formatCurrency(discount.amount)} {discount.type === "AMOUNT" ? "MMK" : "%"}
                    </span>
                </div>
                <div css={styles.summaryText}>
                    <span>Grand Total</span>
                    <span>
                        {formatCurrency(
                            discount.type === "AMOUNT" ? price - discount.amount : price * discount.amount
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
