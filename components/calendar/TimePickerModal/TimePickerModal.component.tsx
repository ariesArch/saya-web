import { FC, useState } from "react";
import TimeKeeper from "react-timekeeper";

import ClientOnlyModal from "@/components/common/ClientOnlyModal/ClientOnlyModal.component";

import * as styles from "./TimePickerModal.styles";

interface Props {
    isOpen: boolean;
    onClose: () => void;
    onSetTime?: (time: string) => void;
}

const TimePickerModal: FC<Props> = ({ isOpen, onClose, onSetTime }) => {
    const [time, setTime] = useState("12:34pm");

    const onSetBtnClick = () => onSetTime && onSetTime(time);

    return (
        <ClientOnlyModal>
            <div css={styles.modal(isOpen)}>
                <div css={styles.backdrop} onClick={onClose} />
                <div css={styles.contents}>
                    <span css={styles.title}>Thursday</span>
                    <TimeKeeper
                        time={time}
                        onChange={(data) => setTime(data.formatted12)}
                        switchToMinuteOnHourSelect
                    />

                    <div css={styles.duration}>
                        <span css={styles.durationLabel}>Duration</span>
                        <div css={styles.durationInputContainer}>
                            25 min <button css={styles.durationChange}>Change</button>
                        </div>
                    </div>

                    <div css={styles.footer}>
                        <div />
                        <div css={styles.buttonsContainer}>
                            <button css={styles.button(false)} onClick={onClose}>
                                Cancel
                            </button>
                            <button css={styles.button(true)} onClick={onSetBtnClick}>
                                Set
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </ClientOnlyModal>
    );
};

export default TimePickerModal;
