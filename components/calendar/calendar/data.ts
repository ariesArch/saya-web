interface ScheduleItem {
    id: number;
    time: string;
    duration: number;
}

export interface WeekDayItem {
    id: number;
    name: string;
    schedules: ScheduleItem[];
}

type DayStatus = "Good enough" | "Slow go go" | "Hard learning" | "Take a nap";

export const mapDayStatus: DayStatus[] = [
    "Take a nap",
    "Slow go go",
    "Slow go go",
    "Good enough",
    "Hard learning",
];

export const data: WeekDayItem[] = [
    {
        id: 1,
        name: "Mon",
        schedules: [
            {
                id: 11,
                time: "8:30 am",
                duration: 20,
            },
            {
                id: 12,
                time: "1:00 pm",
                duration: 15,
            },
            {
                id: 13,
                time: "7:30 pm",
                duration: 15,
            },
        ],
    },
    {
        id: 2,
        name: "Tue",
        schedules: [
            {
                id: 21,
                time: "9:00 am",
                duration: 10,
            },
        ],
    },
    {
        id: 3,
        name: "Wed",
        schedules: [
            {
                id: 31,
                time: "6:30 am",
                duration: 20,
            },
            {
                id: 32,
                time: "8:30 am",
                duration: 20,
            },
            {
                id: 33,
                time: "1:00 pm",
                duration: 30,
            },
            {
                id: 34,
                time: "7:30 pm",
                duration: 30,
            },
        ],
    },
    {
        id: 4,
        name: "Thu",
        schedules: [
            {
                id: 41,
                time: "11:00 am",
                duration: 15,
            },
        ],
    },
    {
        id: 5,
        name: "Fri",
        schedules: [],
    },
    {
        id: 6,
        name: "Sat",
        schedules: [],
    },
    {
        id: 7,
        name: "Sun",
        schedules: [
            {
                id: 71,
                time: "8:30 am",
                duration: 20,
            },
            {
                id: 72,
                time: "1:00 pm",
                duration: 15,
            },
            {
                id: 73,
                time: "7:30 pm",
                duration: 15,
            },
        ],
    },
];
