import { FC } from "react";

import InputCard from "@/components/common/CompleteProfileModal/InputCard/InputCard.component";
import RadioButton from "@/components/common/RadioButton/RadioButton.component";

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
                    required
                    placeholder="your email"
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

            <InputCard label={ageRange.title}>
                <div css={styles.radioContainer}>
                    {ageRange.data.map(({ id, text }) => (
                        <div key={id} css={styles.radioInput(data.ageRange === text)}>
                            <RadioButton
                                label={text}
                                radioSize="1.8rem"
                                checked={data.ageRange === text}
                                onChange={() => onDataChange("ageRange", text)}
                            />
                        </div>
                    ))}
                </div>
            </InputCard>
        </div>
    );
};

const ageRange = {
    title: "How young are you?",
    data: [
        {
            id: 1,
            text: "Below 16",
        },
        {
            id: 2,
            text: "17 to 22",
        },
        {
            id: 3,
            text: "23 to 29",
        },
        {
            id: 4,
            text: "over 30",
        },
        {
            id: 5,
            text: "over 40",
        },
    ],
};

export default FirstStep;
