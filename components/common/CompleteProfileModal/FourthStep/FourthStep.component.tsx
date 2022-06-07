import { FC } from "react";
import { useSelector } from "react-redux";

import InputCard from "@/components/common/CompleteProfileModal/InputCard/InputCard.component";
// import Button from "@/components/common/Button/Button.component";
import RadioButton from "@/components/common/RadioButton/RadioButton.component";
import { levelIcons, Levels } from "@/components/common/sharedData";
import { ReduxState } from "@/interfaces/redux.interfaces";

import * as styles from "./FourthStep.styles";

interface Props {
    level: string;
    onChange: (value: string) => void;
}

const FourthStep: FC<Props> = ({ level, onChange }) => {
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
                            <div css={styles.textContainer}>
                                {levelIcons[id as Levels]}
                                <span css={styles.title}>{name}</span>
                            </div>
                        </label>
                    ))}
            </div>

            {/* <div css={styles.separator}>-or-</div> */}

            {/* <div css={styles.buttonContainer}> */}
            {/*    <Button variant="contained" color="light-green"> */}
            {/*        Take your level test now! */}
            {/*    </Button> */}
            {/* </div> */}

            {/* <a css={styles.link}>Get badge on profile</a> */}
        </InputCard>
    );
};

export default FourthStep;
