import { FC, useEffect, useState } from "react";
import TimeKeeper from "react-timekeeper";

import ClientOnlyModal from "@/components/common/ClientOnlyModal/ClientOnlyModal.component";
import PopupButton from "@/components/common/PopupButton/PopupButton.component";
import DustbinIcon from "@/public/icons/dustbin.svg";

import * as styles from "./TimePickerModal.styles";

interface Props {
    isOpen: boolean;
    onClose: () => void;
    onSetTime?: (time: string) => void;
    initialDuration?: number;
}

const TimePickerModal: FC<Props> = ({ isOpen, initialDuration, onClose, onSetTime }) => {
    const [time, setTime] = useState("12:34pm");
    const [duration, setDuration] = useState(initialDuration);

    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const onPopupClose = () => setIsPopupOpen(false);
    const onPopupToggle = () => setIsPopupOpen(!isPopupOpen);

    const onDurationChange = (duration: number) => {
        setDuration(duration);
        onPopupClose();
    };

    const onSetBtnClick = () => onSetTime && onSetTime(time);

    useEffect(() => {
        setDuration(initialDuration);
    }, [initialDuration]);

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
                        <PopupButton
                            popupContent={
                                <div css={styles.popupContainer}>
                                    {selectableMinutes.map((minute) => (
                                        <div
                                            key={minute}
                                            css={styles.popupItem}
                                            onClick={() => onDurationChange(minute)}>
                                            {minute} min
                                        </div>
                                    ))}
                                </div>
                            }
                            open={isPopupOpen}
                            onClose={onPopupClose}
                            onClick={onPopupToggle}
                            popupContentStyles={{ minWidth: "100%", borderRadius: "0.6rem" }}>
                            <div css={styles.durationInputContainer}>
                                {duration} min <button css={styles.durationChange}>Change</button>
                            </div>
                        </PopupButton>
                    </div>

                    <div css={styles.footer}>
                        <button css={styles.deleteBtn}>
                            <DustbinIcon />
                        </button>
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

const selectableMinutes = [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60];

export default TimePickerModal;
