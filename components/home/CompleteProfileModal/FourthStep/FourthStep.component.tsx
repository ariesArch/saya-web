import { FC } from "react";

import Button from "@/components/common/Button/Button.component";
import RadioButton from "@/components/common/RadioButton/RadioButton.component";
import InputCard from "@/components/home/CompleteProfileModal/InputCard/InputCard.component";
import AdvancedLevel from "@/public/icons/level-advanced.svg";
import BeginnerLevel from "@/public/icons/level-beginner.svg";
import IntermediateLevel from "@/public/icons/level-intermediate.svg";
import PreintermediateLevel from "@/public/icons/level-preintermediate.svg";

import * as styles from "./FourthStep.styles";

interface Props {
    level: string;
    onChange: (value: string) => void;
}

const FourthStep: FC<Props> = ({ level, onChange }) => {
    return (
        <InputCard label={levelsData.title}>
            <div css={styles.radioContainer}>
                {levelsData.items.map(({ id, text, icon }) => (
                    <label key={id} css={styles.radioInput(level === text)} htmlFor={text}>
                        <RadioButton
                            id={text}
                            radioSize="1.6rem"
                            checked={level === text}
                            onChange={() => onChange(text)}
                        />
                        <div css={styles.textContainer}>
                            {icon}
                            <span css={styles.title}>{text}</span>
                        </div>
                    </label>
                ))}
            </div>

            <div css={styles.separator}>-or-</div>

            <div css={styles.buttonContainer}>
                <Button variant="contained" color="light-green">
                    Take your level test now!
                </Button>
            </div>

            <a css={styles.link}>Get badge on profile</a>
        </InputCard>
    );
};

const levelsData = {
    title: "What level of English do you currently have?",
    items: [
        {
            id: 1,
            text: "Beginner",
            icon: <BeginnerLevel />,
        },
        {
            id: 2,
            text: "Pre-Intermediate",
            icon: <PreintermediateLevel />,
        },
        {
            id: 3,
            text: "Intermediate",
            icon: <IntermediateLevel />,
        },
        {
            id: 4,
            text: "Advanced",
            icon: <AdvancedLevel />,
        },
    ],
};

export default FourthStep;
