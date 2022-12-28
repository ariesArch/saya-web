import { FC, ReactNode } from "react";
import { useSelector } from "react-redux";

import InputCard from "@/components/common/CompleteProfileModal/InputCard/InputCard.component";
import RadioButton from "@/components/common/RadioButton/RadioButton.component";
import { ReduxState } from "@/interfaces/redux.interfaces";
import EmployeeIcon from "@/public/icons/employee.svg";
import EmployerIcon from "@/public/icons/employer.svg";
import JobHunterIcon from "@/public/icons/job-hunter.svg";
import StudentIcon from "@/public/icons/student.svg";

import * as styles from "./SecondStep.styles";

const mapIcons: Record<string, ReactNode> = {
    student: <StudentIcon />,
    "fresher-job-hunter": <JobHunterIcon />,
    employee: <EmployeeIcon />,
    "employer-or-freelancer": <EmployerIcon />,
};

interface Props {
    status: string;
    onChange: (value: string) => void;
}

const SecondStep: FC<Props> = ({ status, onChange }) => {
    const { positions } = useSelector((state: ReduxState) => ({
        positions: state.userState.surveyData?.positions,
    }));

    return (
        <InputCard label="What kind of group are you in?">
            <div css={styles.radioContainer}>
                {positions &&
                    positions.map(({ id, title, content }) => (
                        <label key={id} css={styles.radioInput(status === id)} htmlFor={id}>
                            <RadioButton
                                id={id}
                                radioSize="1.6rem"
                                checked={status === id}
                                onChange={() => onChange(id)}
                            />
                            <div css={styles.iconContainer}>{mapIcons[id as any]}</div>
                            <div css={styles.textContainer}>
                                <span css={styles.title}>{title}</span>
                                {content && <span>{content}</span>}
                            </div>
                        </label>
                    ))}
            </div>
        </InputCard>
    );
};

export default SecondStep;
