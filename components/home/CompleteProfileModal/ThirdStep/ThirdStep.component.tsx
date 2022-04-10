import { FC } from "react";

import RadioButton from "@/components/common/RadioButton/RadioButton.component";
import InputCard from "@/components/home/CompleteProfileModal/InputCard/InputCard.component";

import * as styles from "./ThirdStep.styles";

interface Props {
    purpose: string;
    onChange: (value: string) => void;
}

const ThirdStep: FC<Props> = ({ purpose, onChange }) => {
    return (
        <InputCard label={purposeData.title}>
            <div css={styles.radioContainer}>
                {purposeData.items.map(({ id, text }) => (
                    <label key={id} css={styles.radioInput(purpose === text)} htmlFor={text}>
                        <RadioButton
                            id={text}
                            radioSize="1.6rem"
                            checked={purpose === text}
                            onChange={() => onChange(text)}
                        />
                        <div css={styles.textContainer}>
                            <span css={styles.title}>{text}</span>
                        </div>
                    </label>
                ))}
            </div>
        </InputCard>
    );
};

const purposeData = {
    title: "Why are you practicing English?",
    items: [
        {
            id: 1,
            text: "Education 🏫",
        },
        {
            id: 2,
            text: "Job Opportunities 💼",
        },
        {
            id: 3,
            text: "Travel 🧳",
        },
        {
            id: 4,
            text: "Live & Work Abroad 🌎",
        },
        {
            id: 5,
            text: "Culture & Entertainment 🎤",
        },
        {
            id: 6,
            text: "Others ❓",
        },
    ],
};

export default ThirdStep;
