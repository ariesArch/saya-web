import { format } from "date-fns";
import { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import TimeKeeper from "react-timekeeper";
import { toast } from "react-toastify";

import ClientOnlyModal from "@/components/common/ClientOnlyModal/ClientOnlyModal.component";
import PopupButton from "@/components/common/PopupButton/PopupButton.component";
import { ScheduleItem } from "@/interfaces/calendar.interfaces";
import DustbinIcon from "@/public/icons/dustbin.svg";
import {
    createScheduleItemAsync,
    deleteScheduleItemAsync,
    updateScheduleItemAsync,
} from "@/store/calendar/calendar.actions";

import * as styles from "./TimePickerModal.styles";

interface Props {
    isOpen: boolean;
    onClose: () => void;
    initialData: ScheduleItem | null;
    dayId: string;
    dayName: string;
    isUpdate: boolean;
}

const TimePickerModal: FC<Props> = ({ isOpen, initialData, onClose, dayId, dayName, isUpdate }) => {
    const dispatch = useDispatch();
    const [time, setTime] = useState(initialData?.time || format(new Date(), "hh:mm a"));
    const [duration, setDuration] = useState(0);
    const [timePickerKey, setTimePickerKey] = useState(0);

    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const onPopupClose = () => setIsPopupOpen(false);
    const onPopupToggle = () => setIsPopupOpen(!isPopupOpen);
    const [isLoading, setIsLoading] = useState(false);

    const onDurationChange = (duration: number) => {
        setDuration(duration);
        onPopupClose();
    };

    const onSetBtnClick = () => {
        if (!duration) return;

        if (!isUpdate) {
            dispatch(
                createScheduleItemAsync(
                    {
                        day_id: dayId,
                        time: format(new Date(`1/1/2013 ${time}`), "hh:mm a"),
                        duration: `${duration * 60}`,
                    },
                    () => {
                        toast("Schedule created successfully", { type: "success" });
                        onClose();
                    },
                    () => {
                        toast("Failed to create schedule.", { type: "error" });
                    }
                )
            );
        } else {
            if (!initialData) return;
            dispatch(
                updateScheduleItemAsync(
                    {
                        schedule_id: initialData?.schedule_id,
                        time: format(new Date(`1/1/2013 ${time}`), "hh:mm a"),
                        duration: `${duration * 60}`,
                        day_id: dayId,
                    },
                    () => {
                        toast("Schedule updated successfully", { type: "success" });
                        onClose();
                    },
                    () => {
                        toast("Failed to update schedule.", { type: "error" });
                    }
                )
            );
        }
    };

    const onDeleteSuccess = () => {
        setIsLoading(false);
        toast("Schedule deleted successfully", { type: "success" });

        onClose();
    };

    const onDeleteFailure = () => {
        setIsLoading(false);
        toast("Failed to delete schedule", { type: "error" });
    };

    const onDeleteBtnClick = () => {
        if (!initialData?.schedule_id) return;

        setIsLoading(true);
        dispatch(
            deleteScheduleItemAsync(
                { scheduleId: initialData?.schedule_id, dayId },
                onDeleteSuccess,
                onDeleteFailure
            )
        );
    };

    useEffect(() => {
        if (initialData) {
            if (initialData.time !== time) {
                setTime(initialData.time);
                setTimePickerKey(timePickerKey === 0 ? 1 : 0); // to force re-render the timepicker
            }
            if (initialData.duration !== duration) setDuration(+initialData.duration / 60);

            return;
        }

        if (time !== format(new Date(), "hh:mm a")) {
            setTime(format(new Date(), "hh:mm a"));
            setTimePickerKey(timePickerKey === 0 ? 1 : 0); // to force re-render the timepicker
        }
        if (duration !== 0) setDuration(0);
    }, [initialData]);

    const isSetBtnDisabled =
        duration === 0 ||
        (duration * 60 === (initialData?.duration ? initialData.duration : 0) &&
            time === (initialData?.time ? initialData.time : format(new Date(), "hh:mm a")));

    return (
        <ClientOnlyModal>
            <div css={styles.modal(isOpen)}>
                <div css={styles.backdrop} onClick={onClose} />
                <div css={styles.contents}>
                    <span css={styles.title}>{dayName}</span>
                    <TimeKeeper
                        key={timePickerKey}
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
                        {isUpdate ? (
                            <button css={styles.deleteBtn} onClick={onDeleteBtnClick} disabled={isLoading}>
                                <DustbinIcon />
                            </button>
                        ) : (
                            <div />
                        )}
                        <div css={styles.buttonsContainer}>
                            <button css={styles.button(false)} onClick={onClose}>
                                Cancel
                            </button>
                            <button
                                css={styles.button(true, isSetBtnDisabled)}
                                onClick={onSetBtnClick}
                                disabled={isSetBtnDisabled}>
                                {isUpdate ? "Update" : "Set"}
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
