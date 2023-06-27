import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { ChangeEvent, FormEvent, useCallback, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Button from "@/components/common/Button/Button.component";
import { carouselTransition, carouselVariants } from "@/components/common/FramerMotion";
import OTPInput from "@/components/common/OTPInput/OTPInput.component";
import PhoneNumberInput from "@/components/common/PhoneNumberInput/PhoneNumberInput.component";
import { ReduxState } from "@/interfaces/redux.interfaces";
import { updatePhoneNumberAsync, updatePhoneVerifyAsync } from "@/store/user/user.actions";

import * as styles from "./ChangePhoneForm.styles";

const ChangePhoneForm = () => {
    const { initialPhone } = useSelector((state: ReduxState) => ({
        // initialPhone: state.userState.userData?.phone?.slice(2),
        initialPhone: state.userState.userData?.phone,
    }));
    const dispatch = useDispatch();
    const router = useRouter();

    const [step, setStep] = useState<"phone" | "otp">("phone");
    const [phone, setPhone] = useState<number>(initialPhone);
    const [formatedPhone, setFormatedPhone] = useState<number>(null);
    const [otp, setOtp] = useState("");
    const [optExpiredAt, setOptExpiredAt] = useState<number>(0);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string>("");
    const [direction, setDirection] = useState(1);

    const onOTPChange = (otp: string) => {
        setOtp(otp);
    };

    const onChangePhone = (e: ChangeEvent<HTMLInputElement>) => {
        setPhone(parseInt(e.target.value));
    };

    const onChangeFormatedPhone = (value: number) => {
        setFormatedPhone(value);
    };

    const onOTPSendSuccess = (expiredAt: number) => {
        setDirection(1);

        setIsLoading(false);
        setStep("otp");

        if (error) setError("");

        setOptExpiredAt(expiredAt);
    };

    const onOTPSendFailure = (e: any) => {
        setIsLoading(false);

        if (e?.response?.status === 422) {
            setError(e?.response?.data?.error);
        } else {
            setError("Something went wrong. Please try again.");
        }
    };

    const onOTPVerifySuccess = useCallback(() => {
        setDirection(-1);

        setStep("phone");
        setIsLoading(false);

        if (error) setError("");
    }, [error]);

    const onOTPVerifyFailure = useCallback((e: any) => {
        setIsLoading(false);

        if (e?.response?.status === 422) {
            setError("Incorrect OTP.");
        } else {
            setError("Something went wrong. Please try again.");
        }
    }, []);

    const onSave = useCallback(
        (e: FormEvent) => {
            e.preventDefault();
            setIsLoading(true);

            if (step === "phone") {
                dispatch(updatePhoneNumberAsync(formatedPhone, onOTPSendSuccess, onOTPSendFailure));
            } else {
                dispatch(
                    updatePhoneVerifyAsync(
                        { phone: formatedPhone, otp },
                        onOTPVerifySuccess,
                        onOTPVerifyFailure
                    )
                );
            }
        },
        [dispatch, onOTPSendSuccess, onOTPVerifySuccess, otp, formatedPhone, step]
    );

    const isSubmitBtnDisabled = useMemo(() => {
        return step === "phone" ? phone === initialPhone || phone.toString().length < 7 : otp.length < 6;
    }, [initialPhone, otp.length, phone, step]);

    const onGoBack = useCallback(() => {
        setDirection(-1);
        setStep("phone");

        if (otp.length) setOtp("");
        if (error) setError("");
    }, [error, otp.length]);

    const onCancel = () => router.back();

    return (
        <form css={styles.form} onSubmit={onSave}>
            <motion.div
                css={styles.col}
                key={step}
                variants={carouselVariants}
                custom={direction}
                initial="enter"
                animate="center"
                exit="exit"
                transition={carouselTransition}>
                <h5 css={styles.heading}>{step === "phone" ? "Change phone number" : "Enter OTP"}</h5>

                {step === "phone" ? (
                    <div css={styles.inputContainer}>
                        <span css={styles.label}>Enter New Phone</span>
                        <PhoneNumberInput
                            value={phone}
                            formatedPhone={onChangeFormatedPhone}
                            onChange={onChangePhone}
                        />
                        <span css={styles.tip}>
                            We will send an SMS with a confirmation code to your new number
                        </span>
                    </div>
                ) : (
                    <div css={styles.inputContainer}>
                        <span css={styles.otpTip}>
                            We sent one time password to <span>{phone}</span>
                        </span>
                        <OTPInput value={otp} onChange={onOTPChange} expiredAt={optExpiredAt} />
                    </div>
                )}
            </motion.div>

            {error && <div css={styles.error}>{error}</div>}

            <div css={styles.buttonsContainer}>
                <Button type="button" onClick={step === "phone" ? onCancel : onGoBack}>
                    {step === "phone" ? "Cancel" : "Back"}
                </Button>
                <Button
                    variant="contained"
                    loading={isLoading}
                    type="submit"
                    isDisabled={isSubmitBtnDisabled}>
                    {step === "phone" ? "Continue" : "Verify"}
                </Button>
            </div>
        </form>
    );
};

export default ChangePhoneForm;
