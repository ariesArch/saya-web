import CalendarIcon from "@/public/icons/calendar.svg";
import CloseIcon from "@/public/icons/close-circle.svg";
import NotificationIcon from "@/public/icons/notifications-alt.svg";
import TickIcon from "@/public/icons/tick-circle.svg";

import * as styles from "./WeeklyScheduler.styles";

type ScheduleStatus = "active" | "inactive" | "undetermined";

const WeeklyScheduler = () => {
    const icon = (status: ScheduleStatus) => {
        switch (status) {
            case "active":
                return <TickIcon />;
            case "inactive":
                return <CloseIcon />;
            default:
                return <div css={styles.undeterminedIcon} />;
        }
    };
    return (
        <div css={styles.container}>
            <div css={styles.contents}>
                <div css={styles.iconContainer}>
                    <CalendarIcon />
                </div>
                <div css={styles.table}>
                    <span css={styles.tableHeading}>Learning Schedule</span>
                    <div css={styles.tableContents}>
                        {data.map(({ id, day, status }) => (
                            <div key={id} css={styles.column}>
                                <div css={styles.day}>{day}</div>
                                <div css={styles.dayIcon(status)}>{icon(status as ScheduleStatus)}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div css={styles.footer}>
                <div css={styles.footerIcon}>
                    <NotificationIcon />
                </div>
                <span css={styles.footerText}>
                    Scheduled at <strong>11:30AM Today</strong>
                </span>
            </div>
        </div>
    );
};

const data = [
    {
        id: 1,
        day: "M",
        status: "active",
    },
    {
        id: 2,
        day: "T",
        status: "inactive",
    },
    {
        id: 3,
        day: "W",
        status: "active",
    },
    {
        id: 4,
        day: "T",
        status: "active",
    },
    {
        id: 5,
        day: "F",
        status: "undetermined",
    },
    {
        id: 6,
        day: "S",
        status: "undetermined",
    },
    {
        id: 7,
        day: "S",
        status: "inactive",
    },
];

export default WeeklyScheduler;
