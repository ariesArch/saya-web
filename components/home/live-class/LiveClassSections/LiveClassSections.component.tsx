import { format } from "date-fns";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import LiveClassCard from "@/components/home/live-class/LiveClassCard/LiveClassCard.component";
import { ParsedLiveEventData } from "@/interfaces/live-class.interfaces";
import { ReduxState } from "@/interfaces/redux.interfaces";
import { parseData } from "@/utils/index";

import * as styles from "./LiveClassSections.styles";

const LiveClassSections = () => {
    const events = useSelector((state: ReduxState) => state.liveClassState.events);
    const [liveClasses, setLiveClasses] = useState<ParsedLiveEventData>([]);

    useEffect(() => {
        if (events.length) {
            setLiveClasses(parseData(events));

            if (events.find((event) => event.is_notify)) {
                if ("Notification" in window) {
                    Notification.requestPermission();
                }
            }
        }
    }, [events]);

    return (
        <div css={styles.container}>
            {liveClasses.map(({ id, isCurrentWeek, isNextWeek, days }) => (
                <div key={id} css={styles.weekSection}>
                    {days.map(({ id, name, isToday, date, items }) => (
                        <div key={id} css={styles.section}>
                            <div css={styles.header}>
                                {!isCurrentWeek && (
                                    <span css={styles.weekIndicator}>
                                        {isNextWeek ? "Next Week" : "Upcoming Weeks"}
                                    </span>
                                )}
                                <h5 css={styles.heading(isToday)}>{isToday ? "Today" : name}</h5>
                                <span css={styles.subHeading}>
                                    {format(new Date(date), isToday ? "MMM dd, EEE" : "MMM dd")}
                                </span>
                            </div>

                            <div css={styles.grid}>
                                {items.map((item) => (
                                    <LiveClassCard
                                        key={item.id}
                                        isToday={isToday}
                                        status={item.is_live ? "live" : isToday ? "today" : "default"}
                                        data={item}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default LiveClassSections;
