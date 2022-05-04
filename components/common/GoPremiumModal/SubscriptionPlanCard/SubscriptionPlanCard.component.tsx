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
                <strong>{month}</strong> month{month > 1 && "s"}
            </div>

            <div css={styles.pricesContainer}>
                <div css={styles.discountedPrice}>
                    <strong>{formatCurrency((final_price || price) * month)}</strong> MMK
                </div>
                {!!has_promotion && (
                    <div css={styles.price}>
                        <span>{formatCurrency(price * month)}</span> MMK
                    </div>
                )}
            </div>

            <div css={styles.total}>
                <span>
                    <strong>{formatCurrency(price)}</strong> MMK per month
                </span>
            </div>

            {!!has_promotion && <span css={styles.discount}>{promotion_price}% OFF</span>}
        </div>
    );
};

export default SubscriptionPlanCard;
