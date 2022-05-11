import { motion, Variants } from "framer-motion";
import { useState } from "react";
import { useDispatch } from "react-redux";

import ChevronRightIcon from "@/public/icons/chevron-right.svg";
import CrownIcon from "@/public/icons/crown.svg";
import { onPaymentModalToggle } from "@/store/payment/payment.actions";

import * as styles from "./GoPremiumPopupBtn.styles";

const GoPremiumPopupBtn = () => {
    const dispatch = useDispatch();
    const [showTexts, setShowTexts] = useState(false);
    const onOpen = () => dispatch(onPaymentModalToggle(true));

    const onToggleTexts = () => setShowTexts(!showTexts);

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
                <span css={styles.buttonSubtitle}>30% off</span>
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
