import { useState } from "react";

import Switch from "@/components/common/Switch/Switch.component";

import * as styles from "./Header.styles";

const CalendarHeader = () => {
    const [checked, setChecked] = useState(true);
    const onSwitchChange = () => setChecked(!checked);

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
