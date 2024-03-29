import { intervalToDuration, isThisISOWeek, subDays } from "date-fns";

export const secondsToFormattedTime = (seconds: number): string => {
    const intervalDuration = intervalToDuration({ start: 0, end: seconds * 1000 });

    return `${intervalDuration.minutes ? `${intervalDuration.minutes}:` : ``}${
        intervalDuration.seconds < 10 ? `0${intervalDuration.seconds}` : intervalDuration.seconds
    }`;
};

export const isNextWeek = (date: Date): boolean => {
    const nextWeek = subDays(date, 7);

    return isThisISOWeek(nextWeek);
};

export const convertTZ = (date: Date | string, tzString: string) => {
    return new Date(
        (typeof date === "string" ? new Date(date.replace(/-/g, "/")) : date).toLocaleString("en-US", {
            timeZone: tzString,
        })
    );
};

export function convertTo24hr(amPmString: string) {
    const d = new Date(`1/1/2013 ${amPmString}`);
    // to lead with zero
    return `${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}:00`;
}
