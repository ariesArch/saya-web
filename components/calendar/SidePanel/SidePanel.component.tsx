import WeeklySchedule, { ScheduleData } from "@/components/landing/WeeklySchedule/WeeklySchedule.component";

import * as styles from "./SidePanel.styles";

const SidePanel = () => {
    return (
        <div css={styles.container}>
            {data.map((scheduleData) => (
                <WeeklySchedule key={scheduleData.id} css={styles.scheduleItem} data={scheduleData} />
            ))}
        </div>
    );
};

const data: ScheduleData[] = [
    {
        id: 1,
        month: "Jan-Feb",
        avg: "71",
        data: [
            {
                id: 11,
                day: "31",
                status: "active",
                percentage: "82%",
            },
            {
                id: 12,
                day: "1",
                status: "inactive",
                percentage: "",
            },
            {
                id: 13,
                day: "2",
                status: "active",
                percentage: "64%",
            },
            {
                id: 14,
                day: "3",
                status: "active",
                percentage: "98%",
            },
            {
                id: 15,
                day: "4",
                status: "undetermined",
                percentage: "",
            },
            {
                id: 16,
                day: "5",
                status: "undetermined",
                percentage: "",
            },
            {
                id: 17,
                day: "6",
                status: "inactive",
                percentage: "",
            },
        ],
    },
    {
        id: 2,
        month: "Feb",
        avg: "83",
        data: [
            {
                id: 21,
                day: "7",
                status: "active",
                percentage: "82%",
            },
            {
                id: 22,
                day: "8",
                status: "inactive",
                percentage: "",
            },
            {
                id: 23,
                day: "9",
                status: "active",
                percentage: "70%",
            },
            {
                id: 24,
                day: "10",
                status: "active",
                percentage: "100%",
            },
            {
                id: 25,
                day: "11",
                status: "undetermined",
                percentage: "",
            },
            {
                id: 26,
                day: "12",
                status: "undetermined",
                percentage: "",
            },
            {
                id: 27,
                day: "13",
                status: "inactive",
                percentage: "",
            },
        ],
    },
    {
        id: 3,
        month: "Feb",
        avg: "55",
        data: [
            {
                id: 31,
                day: "14",
                status: "active",
                percentage: "82%",
            },
            {
                id: 32,
                day: "15",
                status: "active",
                percentage: "70%",
            },
            {
                id: 33,
                day: "16",
                status: "active",
                percentage: "100%",
            },
            {
                id: 34,
                day: "17",
                status: "active",
                percentage: "57%",
            },
            {
                id: 35,
                day: "18",
                status: "undetermined",
                percentage: "",
            },
            {
                id: 36,
                day: "19",
                status: "undetermined",
                percentage: "",
            },
            {
                id: 37,
                day: "20",
                status: "active",
                percentage: "82%",
            },
        ],
    },
    {
        id: 4,
        month: "Feb",
        avg: "55",
        data: [
            {
                id: 41,
                day: "21",
                status: "active",
                percentage: "82%",
            },
            {
                id: 42,
                day: "22",
                status: "inactive",
                percentage: "",
            },
            {
                id: 43,
                day: "23",
                status: "inactive",
                percentage: "",
            },
            {
                id: 44,
                day: "24",
                status: "active",
                percentage: "70%",
            },
            {
                id: 45,
                day: "25",
                status: "undetermined",
                percentage: "",
            },
            {
                id: 46,
                day: "26",
                status: "undetermined",
                percentage: "",
            },
            {
                id: 47,
                day: "27",
                status: "ongoing",
                percentage: "",
            },
        ],
    },
];

export default SidePanel;
