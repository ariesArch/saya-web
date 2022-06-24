import { useSelector } from "react-redux";

import WeeklySchedule from "@/components/landing/WeeklySchedule/WeeklySchedule.component";
import { ReduxState } from "@/interfaces/redux.interfaces";

import * as styles from "./SidePanel.styles";

const SidePanel = () => {
    const { data } = useSelector((state: ReduxState) => ({ data: state.calendarState.weeklyProgress }));

    return (
        <div css={styles.container}>
            {data.map((scheduleData, key) => (
                <WeeklySchedule
                    key={`${scheduleData.month}-${key}`}
                    css={styles.scheduleItem}
                    data={scheduleData}
                />
            ))}
        </div>
    );
};

export default SidePanel;
