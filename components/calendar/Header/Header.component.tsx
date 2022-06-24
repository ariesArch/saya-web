import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Switch from "@/components/common/Switch/Switch.component";
import { ReduxState } from "@/interfaces/redux.interfaces";
import { calendarUpdateRepeatWeeklySchedule } from "@/store/calendar/calendar.actions";

import * as styles from "./Header.styles";

const CalendarHeader = () => {
    const { repeatWeeklySchedule } = useSelector((state: ReduxState) => ({
        repeatWeeklySchedule: state.calendarState.repeatWeeklySchedule,
    }));
    const dispatch = useDispatch();
    const [checked, setChecked] = useState(repeatWeeklySchedule);
    const [isLoading, setIsLoading] = useState(false);

    const onUpdateSuccess = () => {
        setChecked(!checked);
        setIsLoading(false);
    };

    const onUpdateFailure = () => {
        setIsLoading(false);
    };

    const onSwitchChange = () => {
        if (isLoading) return;

        dispatch(calendarUpdateRepeatWeeklySchedule(!checked, onUpdateSuccess, onUpdateFailure));
    };

    useEffect(() => {
        if (repeatWeeklySchedule !== checked) {
            setChecked(repeatWeeklySchedule);
        }
    }, [repeatWeeklySchedule]);

    return (
        <div css={styles.header}>
            <div css={styles.heading}>Learning Schedule</div>

            <div css={styles.schedule}>
                <span css={styles.text}>Repeat Weekly</span> |
                <div css={styles.switchContainer}>
                    <span css={styles.text}>Schedule: {checked ? "On" : "Off"}</span>
                    <Switch checked={checked} onChange={onSwitchChange} />
                </div>
            </div>
        </div>
    );
};

export default CalendarHeader;
