import { FC } from "react";
import { useSelector } from "react-redux";

import InputCard from "@/components/common/CompleteProfileModal/InputCard/InputCard.component";
import RadioButton from "@/components/common/RadioButton/RadioButton.component";
import { ReduxState } from "@/interfaces/redux.interfaces";

import * as styles from "./FirstStep.styles";

interface Props {
    data: {
        name: string;
        email: string;
        gender: string;
        ageRange: string;
    };
    onDataChange: (type: string, value: string) => void;
}

const FirstStep: FC<Props> = ({ data, onDataChange }) => {
    const { ageGroups } = useSelector((state: ReduxState) => ({
        ageGroups: state.userState.surveyData?.ageGroups,
    }));

    return (
        <div css={styles.container}>
            <InputCard label="Name" labelFor="name">
                <input
                    css={styles.input}
                    id="name"
                    type="text"
                    required
                    placeholder="Full Name"
                    value={data.name}
                    onChange={(e) => onDataChange("name", e.target.value)}
                />
            </InputCard>

            <InputCard label="Email" labelFor="email">
                <input
                    css={styles.input}
                    id="email"
                    type="email"
                    placeholder="your email (optional)"
                    value={data.email}
                    onChange={(e) => onDataChange("email", e.target.value)}
                />
                <p css={styles.text}>
                    Don&apos;t be worry. Saya will never sent <span>spam mail.</span>
                </p>
            </InputCard>

            <InputCard label="Gender">
                <div css={styles.radioContainer}>
                    <div css={styles.radioInput(data.gender === "male")}>
                        <RadioButton
                            label="Male 🚹"
                            radioSize="1.8rem"
                            checked={data.gender === "male"}
                            onChange={() => onDataChange("gender", "male")}
                        />
                    </div>
                    <div css={styles.radioInput(data.gender === "female")}>
                        <RadioButton
                            label="Female 🚺"
                            radioSize="1.8rem"
                            checked={data.gender === "female"}
                            onChange={() => onDataChange("gender", "female")}
                        />
                    </div>
                </div>
            </InputCard>

            <InputCard label="Your Age Group">
                <div css={styles.radioContainer}>
                    {ageGroups &&
                        ageGroups.map(({ id, title }) => (
                            <div key={id} css={styles.radioInput(data.ageRange === id)}>
                                <RadioButton
                                    label={title}
                                    radioSize="1.8rem"
                                    checked={data.ageRange === id}
                                    onChange={() => onDataChange("ageRange", id)}
                                />
                            </div>
                        ))}
                </div>
            </InputCard>
        </div>
    );
};

export default FirstStep;
