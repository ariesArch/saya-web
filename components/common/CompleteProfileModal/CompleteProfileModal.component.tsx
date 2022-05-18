// eslint-disable-next-line import/no-extraneous-dependencies
import "simplebar/dist/simplebar.min.css";

import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import SimpleBar from "simplebar-react";

import Button from "@/components/common/Button/Button.component";
import ChevronLeft from "@/public/icons/chevron-left.svg";
import { userUpdateProfileAsync } from "@/store/user/user.actions";

import * as styles from "./CompleteProfileModal.styles";
import FirstStep from "./FirstStep/FirstStep.component";
import FourthStep from "./FourthStep/FourthStep.component";
import SecondStep from "./SecondStep/SecondStep.component";
import ThirdStep from "./ThirdStep/ThirdStep.component";

const CompleteProfileModal = () => {
    const dispatch = useDispatch();

    const [step, setStep] = useState(1);
    const [firstStepData, setFirstStepData] = useState({
        name: "",
        email: "",
        gender: "",
        ageRange: "",
    });
    const [status, setStatus] = useState("");
    const [purpose, setPurpose] = useState("");
    const [level, setLevel] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const onFirstStepDataChange = (type: string, value: string) => {
        setFirstStepData({ ...firstStepData, [type]: value });
    };

    const onStatusChange = (value: string) => {
        setStatus(value);
    };

    const onPurposeChange = (value: string) => {
        setPurpose(value);
    };

    const onLevelChange = (value: string) => {
        setLevel(value);
    };

    const isBtnDisabled = (): boolean => {
        let isDisabled = false;
        if (step === 1) {
            isDisabled =
                !firstStepData.name ||
                !firstStepData.email ||
                !firstStepData.gender ||
                !firstStepData.ageRange;
        } else if (step === 2) {
            isDisabled = !status;
        } else if (step === 3) {
            isDisabled = !purpose;
        } else if (step === 4) {
            isDisabled = !level;
        }

        return isDisabled;
    };

    const onClickNext = (e: FormEvent) => {
        e.preventDefault();

        if (step === 1) {
            if (firstStepData.name && firstStepData.email && firstStepData.gender && firstStepData.ageRange)
                setStep(2);
        }
        if (step === 2) {
            if (status) setStep(3);
            return;
        }
        if (step === 3) {
            if (purpose) setStep(4);
            return;
        }
        if (step === 4) {
            onFormSubmit();
            return;
        }
    };

    const onFormSubmit = () => {
        setIsLoading(true);
        dispatch(
            userUpdateProfileAsync(
                { ...firstStepData },
                () => setIsLoading(false),
                () => setIsLoading(false)
            )
        );
    };

    const onClickBack = () => {
        if (step === 1) return;

        setStep(step - 1);
    };

    return (
        <div css={styles.wrapper}>
            <SimpleBar css={styles.container} style={{ overflowX: "hidden" }}>
                <div css={styles.header}>
                    <h5 css={styles.heading}>Complete Profile</h5>
                    <span css={styles.subHeading}>Just for 10sec!</span>
                </div>

                <div css={styles.progressIndicator}>
                    <span>{step}/4</span>
                    <div css={styles.progressContainer}>
                        <div css={styles.progressItem(step >= 1)} />
                        <div css={styles.progressItem(step >= 2)} />
                        <div css={styles.progressItem(step >= 3)} />
                        <div css={styles.progressItem(step >= 4)} />
                    </div>
                </div>

                <form css={styles.body} onSubmit={onClickNext}>
                    {step === 1 && <FirstStep data={firstStepData} onDataChange={onFirstStepDataChange} />}
                    {step === 2 && <SecondStep status={status} onChange={onStatusChange} />}
                    {step === 3 && <ThirdStep purpose={purpose} onChange={onPurposeChange} />}
                    {step === 4 && <FourthStep level={level} onChange={onLevelChange} />}

                    <div css={styles.buttonContainer}>
                        {step !== 1 && (
                            <div css={styles.backBtn} onClick={onClickBack}>
                                <ChevronLeft />
                            </div>
                        )}

                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            loading={isLoading}
                            isDisabled={isBtnDisabled()}>
                            {step === 4 ? "Finish" : "Next"}
                        </Button>
                    </div>
                </form>

                {step === 4 && (
                    <div css={styles.tip}>
                        Tap <button>Edit Profile</button> to edit when saved.
                    </div>
                )}
            </SimpleBar>
        </div>
    );
};

export default CompleteProfileModal;
