import { FC } from "react";

import CloseCircleIcon from "@/public/icons/close-circle.svg";

import * as styles from "./GoPremiumModal.styles";

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

const GoPremiumModal: FC<Props> = ({ isOpen, onClose }) => {
    return (
        <div css={styles.modal(isOpen)}>
            <button css={styles.closeButton} onClick={onClose}>
                <CloseCircleIcon />
            </button>
            <div css={styles.modalContents}>as</div>
        </div>
    );
};

export default GoPremiumModal;
