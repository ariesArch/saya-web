import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { ChangeEvent, FormEvent, useState } from "react";
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
        initialPhone: state.userState.userData?.phone?.slice(2),
    }));
    const dispatch = useDispatch();
    const router = useRouter();

    const [step, setStep] = useState<"phone" | "otp">("phone");
    const [phone, setPhone] = useState<string>(initialPhone);
    const [otp, setOtp] = useState("");
    const [optExpiredAt, setOptExpiredAt] = useState<number>(0);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string>("");
    const [direction, setDirection] = useState(1);

    const onOTPChange = (otp: string) => {
        setOtp(otp);
    };

    const onPhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPhone(e.target.value);
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
            setError("Invalid phone number.");
        } else {
            setError("Something went wrong. Please try again.");
        }
    };

    const onOTPVerifySuccess = () => {
        setDirection(-1);

        setStep("phone");
        setIsLoading(false);

        if (error) setError("");
    };

    const onOTPVerifyFailure = (e: any) => {
        setIsLoading(false);

        if (e?.response?.status === 422) {
            setError("Incorrect OTP.");
        } else {
            setError("Something went wrong. Please try again.");
        }
    };

    const onSave = (e: FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        if (step === "phone") {
            dispatch(
                updatePhoneNumberAsync(
                    phone[0] === "0" ? `95${phone.substring(1)}` : `95${phone}`,
                    onOTPSendSuccess,
                    onOTPSendFailure
                )
            );
        } else {
            dispatch(
                updatePhoneVerifyAsync(
                    { phone: phone[0] === "0" ? `95${phone.substring(1)}` : `95${phone}`, otp },
                    onOTPVerifySuccess,
                    onOTPVerifyFailure
                )
            );
        }
    };

    const isSubmitBtnDisabled = () => {
        return step === "phone" ? phone === initialPhone || phone.length < 7 : otp.length < 6;
    };

    const onGoBack = () => {
        setDirection(-1);
        setStep("phone");

        if (otp.length) setOtp("");
        if (error) setError("");
    };

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
                        <PhoneNumberInput value={phone} onChange={onPhoneChange} />
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
                    isDisabled={isSubmitBtnDisabled()}>
                    {step === "phone" ? "Continue" : "Verify"}
                </Button>
            </div>
        </form>
    );
};

export default ChangePhoneForm;
