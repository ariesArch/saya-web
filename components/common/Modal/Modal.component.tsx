import { FC, useRef } from "react";

import ClientOnlyModal from "@/components/common/ClientOnlyModal/ClientOnlyModal.component";
import CloseCircleIcon from "@/public/icons/close-circle-alt.svg";

import * as styles from "./Modal.styles";

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

const Modal: FC<Props> = ({ isOpen, onClose, children }) => {
    const modalContentsRef = useRef(null);

    const onClickShadow = (e: any) => {
        e.stopPropagation();
        if ((modalContentsRef as any).current.contains(e.target)) return;

        onClose();
    };

    return (
        <ClientOnlyModal>
            <div css={styles.modal(isOpen)} onClick={onClickShadow}>
                <div css={styles.modalContents} ref={modalContentsRef}>
                    <button css={styles.closeButton} onClick={onClose}>
                        <CloseCircleIcon />
                    </button>

                    <div css={styles.body}>{children}</div>
                </div>
            </div>
        </ClientOnlyModal>
    );
};

export default Modal;
