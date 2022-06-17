export interface ScheduleItem {
    schedule_id: string;
    time: string;
    duration: number;
}

export interface WeekDayItem {
    day_id: string;
    name: string;
    schedules: ScheduleItem[];
}

export type DayStatus = "Good enough" | "Slow go go" | "Hard learning" | "Take a nap";

export interface WeeklyProgressScheduleItem {
    day: string;
    date: string;
    status: "active" | "inactive" | "undetermined" | "ongoing";
    percentage: string;
}

export interface WeeklyProgressItem {
    month: string;
    avg: string;
    data: WeeklyProgressScheduleItem[];
}
