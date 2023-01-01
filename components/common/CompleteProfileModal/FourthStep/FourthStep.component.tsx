import { FC, ReactNode } from "react";
import { useSelector } from "react-redux";

import Button from "@/components/common/Button/Button.component";
import InputCard from "@/components/common/CompleteProfileModal/InputCard/InputCard.component";
// import Button from "@/components/common/Button/Button.component";
import RadioButton from "@/components/common/RadioButton/RadioButton.component";
import { levelIcons, Levels } from "@/components/common/sharedData";
import { ReduxState } from "@/interfaces/redux.interfaces";
import AdvancedIcon from "@/public/icons/advanced.svg";
import BeginnerIcon from "@/public/icons/begineer.svg";
import IntermediateIcon from "@/public/icons/inter.svg";
import UpperIntermediateIcon from "@/public/icons/upper.svg";

import * as styles from "./FourthStep.styles";

const mapIcons: Record<string, ReactNode> = {
    2: <BeginnerIcon />,
    3: <IntermediateIcon />,
    4: <UpperIntermediateIcon />,
    5: <AdvancedIcon />,
};

interface Props {
    level: string;
    onChange: (value: string) => void;
    onTakeLevelTest: () => void;
}

const FourthStep: FC<Props> = ({ level, onChange, onTakeLevelTest }) => {
    const { levels } = useSelector((state: ReduxState) => ({
        levels: state.userState.surveyData?.levels,
    }));

    return (
        <InputCard label="What level of English do you currently have?">
            <div css={styles.radioContainer}>
                {levels &&
                    levels.map(({ id, name }) => (
                        <label key={id} css={styles.radioInput(level === id)} htmlFor={id}>
                            <RadioButton
                                id={id}
                                radioSize="1.6rem"
                                checked={level === id}
                                onChange={() => onChange(id)}
                            />
                            <div css={styles.iconContainer}>{mapIcons[id as any]}</div>
                            <div css={styles.textContainer}>
                                {levelIcons[id as Levels]}
                                <span css={styles.title}>{name}</span>
                            </div>
                        </label>
                    ))}
            </div>

            <div css={styles.separator}>
                <span>or</span>
            </div>

            <div css={styles.buttonContainer}>
                <Button variant="contained" color="light-green" onClick={onTakeLevelTest}>
                    Take your level test now!
                </Button>
            </div>

            <span css={styles.link}>Get badge on profile</span>
        </InputCard>
    );
};

export default FourthStep;
