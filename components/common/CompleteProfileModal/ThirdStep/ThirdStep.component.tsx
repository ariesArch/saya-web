import { FC, ReactNode } from "react";
import { useSelector } from "react-redux";

import InputCard from "@/components/common/CompleteProfileModal/InputCard/InputCard.component";
import RadioButton from "@/components/common/RadioButton/RadioButton.component";
import { ReduxState } from "@/interfaces/redux.interfaces";
import CulturalEntertainmentIcon from "@/public/icons/cultural-entertainment.svg";
import EducationIcon from "@/public/icons/education.svg";
import JobOpportunitiesIcon from "@/public/icons/job-opportunities.svg";
import LiveAndWorkAbroadIcon from "@/public/icons/live-and-work-abroad.svg";
import OthersIcon from "@/public/icons/others.svg";
import TravelIcon from "@/public/icons/travel.svg";

import * as styles from "./ThirdStep.styles";

const mapIcons: Record<string, ReactNode> = {
    education: <EducationIcon />,
    "job-opportunities": <JobOpportunitiesIcon />,
    "live-&-work-abroad": <LiveAndWorkAbroadIcon />,
    travel: <TravelIcon />,
    "culture-&-entertainment": <CulturalEntertainmentIcon />,
    others: <OthersIcon />,
};

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
                                <div css={styles.iconContainer}>{mapIcons[id as any]}</div>
                                <span css={styles.title}>{title}</span>
                            </div>
                        </label>
                    ))}
            </div>
        </InputCard>
    );
};

export default ThirdStep;
