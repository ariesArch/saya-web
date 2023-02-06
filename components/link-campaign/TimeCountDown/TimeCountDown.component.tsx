import { intervalToDuration } from "date-fns";
import { DetailedHTMLProps, HTMLAttributes, memo, useMemo } from "react";

import * as styles from "./TimeCountDown.styles";

export type Props = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
    startDate: Date;
    endDate: Date;
};

const TimeCountDown = ({ startDate, endDate }: Props) => {
    const { days, hours, minutes } = useMemo(() => {
        const {
            days: _days = 0,
            hours: _hours = 0,
            minutes: _minutes = 0,
        } = intervalToDuration({ start: startDate, end: endDate });
        return {
            days: _days.toString().padStart(2, "0"),
            hours: _hours.toString().padStart(2, "0"),
            minutes: _minutes.toString().padStart(2, "0"),
        };
    }, [startDate, endDate]);

    return (
        <div css={styles.container}>
            <div css={styles.counter}>
                <div css={styles.counterItemsContainer}>
                    {Array.from(days).map((d, i) => (
                        <div css={styles.counterItem} key={i}>
                            {d}
                        </div>
                    ))}
                </div>
                <span css={styles.counterLabel}>days</span>
            </div>
            <div css={styles.counter}>
                <div css={styles.counterItemsContainer}>
                    {Array.from(hours).map((h, i) => (
                        <div css={styles.counterItem} key={i}>
                            {h}
                        </div>
                    ))}
                </div>
                <span css={styles.counterLabel}>hours</span>
            </div>
            <div css={styles.counter}>
                <div css={styles.counterItemsContainer}>
                    {Array.from(minutes).map((m, i) => (
                        <div css={styles.counterItem} key={i}>
                            {m}
                        </div>
                    ))}
                </div>
                <span css={styles.counterLabel}>minutes</span>
            </div>
        </div>
    );
};

export default memo(TimeCountDown);
