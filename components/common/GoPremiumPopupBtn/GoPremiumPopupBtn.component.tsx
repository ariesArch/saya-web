import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

// import { ReduxState } from "@/interfaces/redux.interfaces";
import ChevronRightIcon from "@/public/icons/chevron-right.svg";
import CrownIcon from "@/public/icons/crown.svg";
import { onPaymentModalToggle } from "@/store/payment/payment.actions";

import * as styles from "./GoPremiumPopupBtn.styles";

interface Promotion {
    has_promotion?: boolean;
    title?: string;
}
interface SpecificPromotion {
    title?: string;
    expiry_date?: string;
}
interface GoPremiumPopupBtnProps {
    promotion: Promotion;
    specific_promotion: SpecificPromotion;
}
const GoPremiumPopupBtn = (props: GoPremiumPopupBtnProps) => {
    // const { plans } = useSelector((state: ReduxState) => ({ plans: state.paymentState.subscriptionPlans }));
    const dispatch = useDispatch();
    const [showTexts, setShowTexts] = useState(false);
    const onOpen = () => dispatch(onPaymentModalToggle(true));
    const { promotion, specific_promotion } = props;
    // const getActivePromotion = () => {
    //     if (specific_promotion && specific_promotion.title) {
    //         return specific_promotion.title;
    //     }
    //     if (promotion && promotion.has_promotion) {
    //         return promotion.title;
    //     }
    //     return null;
    // };
    // const highestPercent = () => {
    //     let percent = 0;

    //     if (!plans) return 0;

    //     plans.forEach((item) => {
    //         if (!item.is_percentage) return;
    //         if (item.promotion_price > percent) {
    //             percent = item.promotion_price;
    //         }
    //     });

    //     return percent;
    // };

    const onToggleTexts = () => setShowTexts(!showTexts);

    // useEffect(() => {
    //     if (plans.length === 0) {
    //         dispatch(fetchSubscriptionPlansAsync());
    //     }
    // }, [dispatch, plans.length]);
    const [activePromotion, setActivePromotion] = useState<SpecificPromotion>({});
    const [remainingTime, setRemainingTime] = useState("");

    useEffect(() => {
        if (specific_promotion && specific_promotion.title) {
            setActivePromotion(specific_promotion);
            const intervalId = setInterval(() => {
                const currentTime = new Date().getTime();
                const expiryTime = new Date(specific_promotion.expiry_date).getTime();

                if (expiryTime <= currentTime) {
                    setRemainingTime("Expired");
                    clearInterval(intervalId);
                } else {
                    const timeDifference = expiryTime - currentTime;
                    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
                    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
                    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

                    setRemainingTime(`${days}d: ${hours}h:  ${minutes}m:  ${seconds}s`);
                }
            }, 1000);
        } else if (promotion && promotion.has_promotion) {
            setActivePromotion(promotion);
        } else {
            setActivePromotion({});
        }
    }, [promotion, specific_promotion]);

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
                    {activePromotion.title}
                    <span style={{ marginLeft: "20px" }}>{remainingTime}</span>
                    <ChevronRightIcon />
                </div>
                <span css={styles.buttonSubtitle}>Go Premium</span>
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
        width: "auto",
        height: "auto",
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
