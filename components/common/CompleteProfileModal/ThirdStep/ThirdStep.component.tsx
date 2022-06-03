import { FC } from "react";
import { useSelector } from "react-redux";

import InputCard from "@/components/common/CompleteProfileModal/InputCard/InputCard.component";
import RadioButton from "@/components/common/RadioButton/RadioButton.component";
import { ReduxState } from "@/interfaces/redux.interfaces";

import * as styles from "./ThirdStep.styles";

interface Props {
    purpose: string;
    onChange: (value: string) => void;
}

const ThirdStep: FC<Props> = ({ purpose, onChange }) => {
    const { purposes } = useSelector((state: ReduxState) => ({
        purposes: state.userState.surveyData?.practicingFor,
    }));

    return (
        <InputCard label="Why are you practicing English?">
            <div css={styles.radioContainer}>
                {purposes &&
                    purposes.map(({ id, title }) => (
                        <label key={id} css={styles.radioInput(purpose === id)} htmlFor={id}>
                            <RadioButton
                                id={id}
                                radioSize="1.6rem"
                                checked={purpose === id}
                                onChange={() => onChange(id)}
                            />
                            <div css={styles.textContainer}>
                                <span css={styles.title}>{title}</span>
                            </div>
                        </label>
                    ))}
            </div>
        </InputCard>
    );
};

export default ThirdStep;
