import { useState } from "react";

import { data, mapDayStatus } from "@/components/calendar/calendar/data";
import TimePickerModal from "@/components/calendar/TimePickerModal/TimePickerModal.component";
import AddCircleIcon from "@/public/icons/add-circle.svg";

import * as styles from "./Calendar.styles";

const Calendar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const onModalOpen = () => setIsOpen(true);
    const onModalClose = () => setIsOpen(false);
    const onSetTime = (time: string) => console.log(time);

    return (
        <div css={styles.container}>
            <div css={styles.grid}>
                {data.map(({ id, name, schedules }) => (
                    <div key={id} css={styles.gridCol}>
                        <div css={styles.colHeader}>
                            <span css={styles.heading}>{name}</span>
                            <span css={styles.subHeading}>
                                {mapDayStatus[schedules.length > 4 ? 4 : schedules.length]}
                            </span>
                        </div>
                        <div css={styles.colBody}>
                            {schedules.map(({ id, time, duration }) => (
                                <button key={id} css={styles.scheduleItem} onClick={onModalOpen}>
                                    <div css={styles.textContainer}>
                                        <span css={styles.text}>{time.split(" ")[0]}</span>
                                        <span css={styles.label}>{time.split(" ")[1].toUpperCase()}</span>
                                    </div>
                                    <div css={styles.textContainer}>
                                        <span css={styles.text}>{duration}</span>{" "}
                                        <span css={styles.label}>mins</span>
                                    </div>
                                </button>
                            ))}

                            <button css={styles.addBtn} onClick={onModalOpen}>
                                <AddCircleIcon />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <TimePickerModal isOpen={isOpen} onClose={onModalClose} onSetTime={onSetTime} />
        </div>
    );
};

export default Calendar;
