import { intervalToDuration, isThisISOWeek, subDays } from "date-fns";

export const secondsToFormattedTime = (seconds: number): string => {
    const intervalDuration = intervalToDuration({ start: 0, end: seconds * 1000 });

    return `${intervalDuration.minutes ? `${intervalDuration.minutes}:` : ``}${
        (intervalDuration.seconds as number) < 10 ? `0${intervalDuration.seconds}` : intervalDuration.seconds
    }`;
};

export const isNextWeek = (date: Date): boolean => {
    const nextWeek = subDays(date, 7);

    return isThisISOWeek(nextWeek);
};

export const convertTZ = (date: Date | string, tzString: string) => {
    return new Date(
        (typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", { timeZone: tzString })
    );
};
