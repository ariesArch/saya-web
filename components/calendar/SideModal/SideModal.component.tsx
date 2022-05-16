import { FC } from "react";

import ClientOnlyModal from "@/components/common/ClientOnlyModal/ClientOnlyModal.component";

import * as styles from "./SideModal.styles";

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

const SideModal: FC<Props> = ({ isOpen, onClose, children }) => {
    return (
        <ClientOnlyModal>
            <div css={styles.modal(isOpen)}>
                <div css={styles.backdrop} onClick={onClose} />
                <div css={styles.contents}>{children}</div>
            </div>
        </ClientOnlyModal>
    );
};

export default SideModal;
