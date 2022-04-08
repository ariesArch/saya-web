import CloseIcon from "@/public/icons/close-circle.svg";
import TickIcon from "@/public/icons/tick-circle.svg";

import * as styles from "./WeeklySchedule.styles";

const WeeklyScheduler = () => {
    const icon = (status: "active" | "inactive" | "undetermined") => {
        switch (status) {
            case "active":
                return <TickIcon />;
            case "inactive":
                return <CloseIcon />;
            default:
                return "-";
        }
    };

    return (
        <div css={styles.container}>
            <div css={styles.header}>
                <span css={styles.month}>Feb</span>
                <span css={styles.avg}>
                    <span>AVG. </span>55%
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

interface ScheduleData {
    month: string;
    avg: string;
    data: {
        id: number;
        day: string;
        status: "active" | "inactive" | "undetermined";
        percentage: string;
    }[];
}

const data: ScheduleData = {
    month: "Feb",
    avg: "55",
    data: [
        {
            id: 1,
            day: "7",
            status: "active",
            percentage: "82%",
        },
        {
            id: 2,
            day: "8",
            status: "inactive",
            percentage: "",
        },
        {
            id: 3,
            day: "9",
            status: "active",
            percentage: "70%",
        },
        {
            id: 4,
            day: "10",
            status: "active",
            percentage: "100%",
        },
        {
            id: 5,
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
            id: 7,
            day: "13",
            status: "inactive",
            percentage: "",
        },
    ],
};

export default WeeklyScheduler;
