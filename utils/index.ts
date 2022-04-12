import { format, isThisISOWeek, isToday } from "date-fns";
import { ServerResponse } from "http";
import Router from "next/router";

import { LiveEvent, ParsedLiveEventData } from "@/interfaces/live-class.interfaces";
import { isNextWeek } from "@/utils/date-time";

export const redirectTo = (status: number, location: string, res: ServerResponse) => {
    res.writeHead(status, {
        Location: location,
    });
    res.end();
};

export const redirectOnEitherSide = (res: ServerResponse | undefined, pathname: string) => {
    if (res) {
        redirectTo(307, pathname, res);
    } else {
        Router.push(pathname);
    }
};

export const emptyFunction = () => {
    // do nothing
};

export function groupBy(array: Record<string, any>[], property: string) {
    const hash: Record<string, any> = {};

    array.forEach((item) => {
        const key: string = item[property];
        if (!hash[key]) {
            hash[key] = [];
        }
        hash[key].push(item);
    });

    return hash;
}

export const parseData = (data: LiveEvent[]) => {
    const parsedData: ParsedLiveEventData = [];

    const thisWeekData: LiveEvent[] = [];
    const nextWeekData: LiveEvent[] = [];
    const upcomingWeeksData: LiveEvent[] = [];

    const parseWeekData = (data: Record<string, LiveEvent>) => {
        const weekData: any[] = [];

        Object.keys(data).forEach((key) => {
            weekData.push({
                id: key,
                name: format(new Date(key), "EEE"),
                isToday: isToday(new Date(key)),
                date: key,
                items: data[key],
            });
        });

        return weekData;
    };

    data.forEach((item) => {
        if (isThisISOWeek(new Date(item.date))) {
            thisWeekData.push(item);
        } else if (isNextWeek(new Date(item.date))) {
            nextWeekData.push(item);
        } else {
            upcomingWeeksData.push(item);
        }
    });

    if (thisWeekData.length) {
        const groupedData = groupBy(thisWeekData, "date");
        parsedData.push({
            id: 1,
            isCurrentWeek: true,
            isNextWeek: false,
            days: parseWeekData(groupedData),
        });
    }

    if (nextWeekData.length) {
        const groupedData = groupBy(nextWeekData, "date");
        parsedData.push({
            id: 2,
            isCurrentWeek: false,
            isNextWeek: true,
            days: parseWeekData(groupedData),
        });
    }

    if (upcomingWeeksData.length) {
        const groupedData = groupBy(upcomingWeeksData, "date");
        parsedData.push({
            id: 3,
            isCurrentWeek: false,
            isNextWeek: false,
            days: parseWeekData(groupedData),
        });
    }

    return parsedData;
};
