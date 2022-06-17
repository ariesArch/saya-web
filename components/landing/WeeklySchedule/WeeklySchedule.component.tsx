import { FC, HTMLAttributes } from "react";

import { WeeklyProgressItem } from "@/interfaces/calendar.interfaces";
import CheckCircleIcon from "@/public/icons/check-circle.svg";
import CloseIcon from "@/public/icons/close-circle.svg";
import TickIcon from "@/public/icons/tick-circle.svg";

import * as styles from "./WeeklySchedule.styles";

interface Props extends HTMLAttributes<HTMLDivElement> {
    data?: WeeklyProgressItem;
}

const WeeklyScheduler: FC<Props> = ({ data = scheduleData, ...rest }) => {
    const icon = (status: "active" | "inactive" | "undetermined" | "ongoing") => {
        switch (status) {
            case "active":
                return <TickIcon />;
            case "inactive":
                return <CloseIcon />;
            case "ongoing":
                return <CheckCircleIcon />;
            default:
                return "-";
        }
    };

    return (
        <div css={styles.container} {...rest}>
            <div css={styles.header}>
                <span css={styles.month}>{data.month}</span>
                <span css={styles.avg}>
                    <span>AVG. </span>
                    {data.avg}%
                </span>
            </div>
            <div css={styles.table}>
                {data.data.map(({ day, date, percentage, status }) => (
                    <div css={styles.dayItem} key={date}>
                        <span css={styles.day}>{day}</span>
                        <span css={styles.iconContainer(status)}>{icon(status)}</span>
                        {(status === "ongoing" || status === "active") && (
                            <span css={styles.percent}>{percentage}</span>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

const scheduleData: WeeklyProgressItem = {
    month: "Feb",
    avg: "55",
    data: [
        {
            day: "7",
            date: "2022-02-07",
            status: "active",
            percentage: "82%",
        },
        {
            day: "8",
            date: "2022-02-08",
            status: "inactive",
            percentage: "",
        },
        {
            day: "9",
            date: "2022-02-09",
            status: "active",
            percentage: "70%",
        },
        {
            day: "10",
            date: "2022-02-10",
            status: "active",
            percentage: "100%",
        },
        {
            day: "11",
            date: "2022-02-11",
            status: "undetermined",
            percentage: "",
        },
        {
            day: "12",
            date: "2022-02-12",
            status: "undetermined",
            percentage: "",
        },
        {
            day: "13",
            date: "2022-02-13",
            status: "inactive",
            percentage: "",
        },
    ],
};

export default WeeklyScheduler;
