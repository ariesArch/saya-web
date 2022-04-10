import { FC } from "react";

import RadioButton from "@/components/common/RadioButton/RadioButton.component";
import InputCard from "@/components/home/CompleteProfileModal/InputCard/InputCard.component";

import * as styles from "./SecondStep.styles";

interface Props {
    status: string;
    onChange: (value: string) => void;
}

const SecondStep: FC<Props> = ({ status, onChange }) => {
    return (
        <InputCard label={statusData.title}>
            <div css={styles.radioContainer}>
                {statusData.items.map(({ id, text, subText }) => (
                    <label key={id} css={styles.radioInput(status === text)} htmlFor={text}>
                        <RadioButton
                            id={text}
                            radioSize="1.6rem"
                            checked={status === text}
                            onChange={() => onChange(text)}
                        />
                        <div css={styles.textContainer}>
                            <span css={styles.title}>{text}</span>
                            {subText && <span>{subText}</span>}
                        </div>
                    </label>
                ))}
            </div>
        </InputCard>
    );
};

const statusData = {
    title: "",
    items: [
        {
            id: 1,
            text: "Student 🎒",
            subText: "State, University, College or other classes.",
        },
        {
            id: 2,
            text: "Fresher job-hunter 👋🏻",
            subText: "Hunting job for first time with graduated or without graduated.",
        },
        {
            id: 3,
            text: "Junior level employee 🏅",
            subText: "",
        },
        {
            id: 4,
            text: "Senior & Manager level employee 👑",
            subText: "",
        },
        {
            id: 5,
            text: "Employer or Freelancer 😎",
            subText: "",
        },
    ],
};

export default SecondStep;
