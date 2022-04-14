import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ReduxState } from "@/interfaces/redux.interfaces";
import { onFetchSubscriptionPlansAsync } from "@/store/user/user.actions";

import * as styles from "./SubscriptionPlans.styles";

const SubscriptionPlans = () => {
    const dispatch = useDispatch();
    const plans = useSelector((state: ReduxState) => state.userState.subscriptionPlans);

    useEffect(() => {
        dispatch(onFetchSubscriptionPlansAsync());
    }, [dispatch]);

    return (
        <div css={styles.container}>
            <div css={styles.cardsContainer}>
                {plans.map(({ id, month }) => (
                    <div key={id} css={styles.card}>
                        <div css={styles.month}>
                            <strong>{month}</strong> month
                        </div>

                        <div css={styles.pricesContainer}>
                            <div css={styles.discountedPrice}>
                                MMK <strong>8,100</strong> /mo
                            </div>
                            <div css={styles.price}>
                                MMK <span>9,100</span> /mo
                            </div>
                        </div>

                        <div css={styles.total}>Billed every months</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SubscriptionPlans;
