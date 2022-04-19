import { FC, HTMLAttributes } from "react";

import { SubscriptionPlan } from "@/interfaces/payment.interfaces";
import CupIcon from "@/public/icons/cup.svg";
import { formatCurrency } from "@/utils/index";

import * as styles from "./SubscriptionPlanCard.styles";

interface Props extends HTMLAttributes<HTMLDivElement> {
    data: SubscriptionPlan;
    showBadge?: boolean;
}

const SubscriptionPlanCard: FC<Props> = ({ data, showBadge = true, ...rest }) => {
    const { price, final_price, month, has_promotion, promotion_price, id } = data;

    return (
        <div css={styles.card} {...rest}>
            {id === 1 && showBadge && (
                <div css={styles.popularBadge}>
                    <CupIcon />
                    <span>Most Popular</span>
                </div>
            )}

            <div css={styles.month}>
                <strong>{month}</strong> month
            </div>

            <div css={styles.pricesContainer}>
                <div css={styles.discountedPrice}>
                    MMK <strong>{formatCurrency((final_price || price) / month)}</strong> /mo
                </div>
                {!!has_promotion && (
                    <div css={styles.price}>
                        MMK <span>{formatCurrency(price / month)}</span> /mo
                    </div>
                )}
            </div>

            <div css={styles.total}>
                {has_promotion ? (
                    <span>
                        Total <strong>{formatCurrency(final_price)}</strong> MMK for {month} months
                    </span>
                ) : (
                    "Billed every months"
                )}
            </div>

            {!!has_promotion && <span css={styles.discount}>{promotion_price}% OFF</span>}
        </div>
    );
};

export default SubscriptionPlanCard;
