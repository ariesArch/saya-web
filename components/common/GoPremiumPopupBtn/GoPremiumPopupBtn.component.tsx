import { Fragment, useState } from "react";

import GoPremiumModal from "@/components/common/GoPremiumModal/GoPremiumModal.component";
import ChevronRightIcon from "@/public/icons/chevron-right.svg";
import CrownIcon from "@/public/icons/crown.svg";

import * as styles from "./GoPremiumPopupBtn.styles";

const GoPremiumPopupBtn = () => {
    const [isOpen, setIsOpen] = useState(false);
    const onClose = () => setIsOpen(false);
    const onOpen = () => setIsOpen(true);

    return (
        <Fragment>
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

            <GoPremiumModal isOpen={isOpen} onClose={onClose} />
        </Fragment>
    );
};

export default GoPremiumPopupBtn;
