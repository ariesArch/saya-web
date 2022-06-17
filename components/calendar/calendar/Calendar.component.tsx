import "react-toastify/dist/ReactToastify.min.css";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";

import TimePickerModal from "@/components/calendar/TimePickerModal/TimePickerModal.component";
import { DayStatus, ScheduleItem } from "@/interfaces/calendar.interfaces";
import { ReduxState } from "@/interfaces/redux.interfaces";
import AddCircleIcon from "@/public/icons/add-circle.svg";

import * as styles from "./Calendar.styles";

const Calendar = () => {
    const { scheduleData } = useSelector((state: ReduxState) => ({
        scheduleData: state.calendarState.schedule,
    }));
    const [isOpen, setIsOpen] = useState(false);
    const [selectedDay, setSelectedDay] = useState<string>("");
    const [selectedItem, setSelectedItem] = useState<ScheduleItem | null>(null);

    const onModalOpen = (item: ScheduleItem | null, dayId: string) => {
        if (item) {
            setSelectedItem(item);
        } else {
            setSelectedItem(null);
        }

        setSelectedDay(dayId);
        setIsOpen(true);
    };
    const onModalClose = () => setIsOpen(false);

    useEffect(() => {
        if ("Notification" in window) {
            if (Notification.permission !== "granted") {
                Notification.requestPermission();
            }
        }
    }, []);

    return (
        <div css={styles.container}>
            <div css={styles.grid}>
                {scheduleData.map((day) => (
                    <div key={day.day_id} css={styles.gridCol}>
                        <div css={styles.colHeader}>
                            <span css={styles.heading}>{day.name}</span>
                            <span css={styles.subHeading}>
                                {mapDayStatus[day.schedules.length > 4 ? 4 : day.schedules.length]}
                            </span>
                        </div>
                        <div css={styles.colBody}>
                            {day.schedules.map((item) => (
                                <button
                                    key={item.schedule_id}
                                    css={styles.scheduleItem}
                                    onClick={() => onModalOpen(item, day.day_id)}>
                                    <div css={styles.textContainer}>
                                        <span css={styles.text}>{item.time.split(" ")[0]}</span>
                                        <span css={styles.label}>
                                            {item.time.split(" ")[1].toUpperCase()}
                                        </span>
                                    </div>
                                    <div css={styles.textContainer}>
                                        <span css={styles.text}>{item.duration / 60}</span>{" "}
                                        <span css={styles.label}>mins</span>
                                    </div>
                                </button>
                            ))}

                            <button css={styles.addBtn} onClick={() => onModalOpen(null, day.day_id)}>
                                <AddCircleIcon />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <TimePickerModal
                initialData={selectedItem}
                isOpen={isOpen}
                onClose={onModalClose}
                dayId={selectedDay}
                isUpdate={selectedItem !== null}
            />

            <ToastContainer autoClose={2000} />
        </div>
    );
};

export const mapDayStatus: DayStatus[] = [
    "Take a nap",
    "Slow go go",
    "Slow go go",
    "Good enough",
    "Hard learning",
];

// const findScheduleById = (data: WeekDayItem[], id: number) => {
//     const schedule = data.find(({ schedules }) => schedules.find((item) => item.schedule_id === id));
//
//     return schedule ? schedule.schedules.find((item) => item.schedule_id === id) : null;
// };

export default Calendar;
