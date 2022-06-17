import { ScheduleItem } from "@/interfaces/calendar.interfaces";

type DayStatus = "Good enough" | "Slow go go" | "Hard learning" | "Take a nap";

export const mapDayStatus: DayStatus[] = [
    "Take a nap",
    "Slow go go",
    "Slow go go",
    "Good enough",
    "Hard learning",
];

export interface WeekDayItem {
    day_id: string;
    name: string;
    schedules: ScheduleItem[];
}

export const data: WeekDayItem[] = [];
