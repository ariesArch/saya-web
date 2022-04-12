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
