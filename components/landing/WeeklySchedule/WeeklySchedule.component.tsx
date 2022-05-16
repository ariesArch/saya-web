import { FC, HTMLAttributes } from "react";

import CheckCircleIcon from "@/public/icons/check-circle.svg";
import CloseIcon from "@/public/icons/close-circle.svg";
import TickIcon from "@/public/icons/tick-circle.svg";

import * as styles from "./WeeklySchedule.styles";

interface Props extends HTMLAttributes<HTMLDivElement> {
    data?: ScheduleData;
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
                {data.data.map(({ id, day, percentage, status }) => (
                    <div css={styles.dayItem} key={id}>
                        <span css={styles.day}>{day}</span>
                        <span css={styles.iconContainer(status)}>{icon(status)}</span>
                        <span css={styles.percent}>{percentage}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export interface ScheduleData {
    id: number;
    month: string;
    avg: string;
    data: {
        id: number;
        day: string;
        status: "active" | "inactive" | "undetermined" | "ongoing";
        percentage: string;
    }[];
}

const scheduleData: ScheduleData = {
    id: 1,
    month: "Feb",
    avg: "55",
    data: [
        {
            id: 11,
            day: "7",
            status: "active",
            percentage: "82%",
        },
        {
            id: 12,
            day: "8",
            status: "inactive",
            percentage: "",
        },
        {
            id: 13,
            day: "9",
            status: "active",
            percentage: "70%",
        },
        {
            id: 14,
            day: "10",
            status: "active",
            percentage: "100%",
        },
        {
            id: 15,
            day: "11",
            status: "undetermined",
            percentage: "",
        },
        {
            id: 6,
            day: "12",
            status: "undetermined",
            percentage: "",
        },
        {
            id: 17,
            day: "13",
            status: "inactive",
            percentage: "",
        },
    ],
};

export default WeeklyScheduler;
