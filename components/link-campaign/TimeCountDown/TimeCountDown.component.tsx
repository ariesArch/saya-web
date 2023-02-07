import { intervalToDuration } from "date-fns";
import { DetailedHTMLProps, HTMLAttributes, memo, useEffect, useMemo, useState } from "react";

import * as styles from "./TimeCountDown.styles";

export type Props = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
    endDate: Date;
};

const generateCountDown = (endDate: Date) => {
    const {
        days: _days = 0,
        hours: _hours = 0,
        minutes: _minutes = 0,
    } = intervalToDuration({ start: new Date(), end: endDate });

    return {
        days: _days.toString().padStart(2, "0"),
        hours: _hours.toString().padStart(2, "0"),
        minutes: _minutes.toString().padStart(2, "0"),
    };
};

const TimeCountDown = ({ endDate }: Props) => {
    const initialCountDown = useMemo(() => generateCountDown(endDate), [endDate]);

    const [countDown, setCountDown] = useState(initialCountDown);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setCountDown(generateCountDown(endDate));
        }, 1000 * 60);

        return () => clearTimeout(timeout);
    }, [endDate]);

    return (
        <div css={styles.container}>
            {Object.keys(countDown).map((key) => (
                <div key={key} css={styles.counter}>
                    <div css={styles.counterItemsContainer}>
                        {Array.from(countDown[key as keyof typeof countDown]).map((d, i) => (
                            <div css={styles.counterItem} key={i}>
                                {d}
                            </div>
                        ))}
                    </div>
                    <span css={styles.counterLabel}>{key}</span>
                </div>
            ))}
        </div>
    );
};

export default memo(TimeCountDown);
