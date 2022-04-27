import { useDispatch } from "react-redux";

import ChevronRightIcon from "@/public/icons/chevron-right.svg";
import CrownIcon from "@/public/icons/crown.svg";
import { onPaymentModalToggle } from "@/store/payment/payment.actions";

import * as styles from "./GoPremiumPopupBtn.styles";

const GoPremiumPopupBtn = () => {
    const dispatch = useDispatch();
    const onOpen = () => dispatch(onPaymentModalToggle(true));

    return (
        <button css={styles.button} onClick={onOpen}>
            <div css={styles.crownIconContainer}>
                <CrownIcon />
            </div>
            <div css={styles.buttonTexts}>
                <div css={styles.buttonTitle}>
                    Go Premium
                    <ChevronRightIcon />
                </div>
                <span css={styles.buttonSubtitle}>30% off</span>
            </div>
        </button>
    );
};

export default GoPremiumPopupBtn;
