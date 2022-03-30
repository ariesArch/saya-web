import Button from "@/components/common/Button/Button.component";
import VideoCameraIcon from "@/public/icons/video-camera.svg";

import * as styles from "./ScheduleList.styles";

const ScheduleList = () => {
    return (
        <div css={styles.container}>
            <div css={styles.scheduleList}>
                {scheduleList.map(({ id, title, date, day, duration, teacherName }) => (
                    <div css={styles.scheduleItem} key={id}>
                        <div css={styles.scheduleIcon}>
                            <VideoCameraIcon />
                        </div>
                        <div css={styles.scheduleContents}>
                            <div css={styles.dateInfo}>
                                <div css={styles.date}>
                                    {date} - <strong>{day}</strong>
                                </div>
                                <div css={styles.duration}>{duration}</div>
                            </div>
                            <div css={styles.classTitle}>{title}</div>
                            <span css={styles.teacherName}>{teacherName}</span>
                        </div>
                    </div>
                ))}
            </div>
            <div css={styles.separator}>...</div>
            <Button css={styles.button} variant="contained" color="success">
                <VideoCameraIcon /> Join Now
            </Button>
        </div>
    );
};

const scheduleList = [
    {
        id: 1,
        date: "March 01",
        day: "Monday",
        duration: "8:00PM - 9:00PM",
        title: "Speaking Class",
        teacherName: "Tr.Cherry",
    },
    {
        id: 2,
        date: "March 02",
        day: "Tuesday",
        duration: "8:00PM - 9:00PM",
        title: "Speaking Class",
        teacherName: "Tr.Cherry",
    },
    {
        id: 3,
        date: "March 03",
        day: "Wednesday",
        duration: "8:00PM - 9:00PM",
        title: "Listening Class",
        teacherName: "Tr.Cherry",
    },
];

export default ScheduleList;
