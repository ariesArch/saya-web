import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ReduxState } from "@/interfaces/redux.interfaces";
import ChevronRightIcon from "@/public/icons/chevron-right.svg";
import CrownIcon from "@/public/icons/crown.svg";
import { fetchSubscriptionPlansAsync, onPaymentModalToggle } from "@/store/payment/payment.actions";

import * as styles from "./GoPremiumPopupBtn.styles";

const GoPremiumPopupBtn = () => {
    const { plans } = useSelector((state: ReduxState) => ({ plans: state.paymentState.subscriptionPlans }));
    const dispatch = useDispatch();
    const [showTexts, setShowTexts] = useState(false);
    const onOpen = () => dispatch(onPaymentModalToggle(true));

    const highestPercent = () => {
        let percent = 0;

        if (!plans) return 0;

        plans.forEach((item) => {
            if (!item.is_percentage) return;
            if (item.promotion_price > percent) {
                percent = item.promotion_price;
            }
        });

        return percent;
    };

    const onToggleTexts = () => setShowTexts(!showTexts);

    useEffect(() => {
        if (plans.length === 0) {
            dispatch(fetchSubscriptionPlansAsync());
        }
    }, [dispatch, plans.length]);

    return (
        <button css={styles.button}>
            <div css={styles.crownIconContainer} onClick={onToggleTexts}>
                <CrownIcon />
            </div>
            <motion.div
                css={styles.buttonTexts}
                onClick={onOpen}
                variants={variants}
                transition={transition}
                animate={showTexts ? "show" : "hide"}>
                <div css={styles.buttonTitle}>
                    Go Premium
                    <ChevronRightIcon />
                </div>
                <span css={styles.buttonSubtitle}>{highestPercent()}% off</span>
            </motion.div>
        </button>
    );
};

const variants: Variants = {
    hide: {
        width: "0px",
        height: "0px",
        padding: 0,
        margin: 0,
        opacity: 0,
    },
    show: {
        padding: "0.4rem 1rem 0.4rem 0",
        marginLeft: "1.2rem",
        opacity: 1,
    },
};

const transition = {
    type: "spring",
    duration: 0.4,
};

export default GoPremiumPopupBtn;
