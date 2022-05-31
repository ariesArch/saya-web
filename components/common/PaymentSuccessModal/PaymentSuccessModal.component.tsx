import { FC } from "react";

import Button from "@/components/common/Button/Button.component";
import Modal from "@/components/common/Modal/Modal.component";
import SuccessIllustration from "@/public/icons/success.svg";

import * as styles from "./PaymentSuccessModal.styles";

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

const PaymentSuccessModal: FC<Props> = ({ isOpen, onClose }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div css={styles.modalContents}>
                <div css={styles.illuContainer}>
                    <SuccessIllustration />
                </div>

                <div css={styles.textContainer}>
                    <h5 css={styles.heading}>Payment Successful !</h5>
                    <span css={styles.text}>
                        Congratulations on becoming our premium member . Now enjoy SAYA premium
                    </span>
                </div>

                <Button css={styles.button} variant="contained" color="course" onClick={onClose}>
                    Done
                </Button>
            </div>
        </Modal>
    );
};

export default PaymentSuccessModal;
