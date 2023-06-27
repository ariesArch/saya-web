import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { ChangeEvent, FormEvent, memo, useState } from "react";
import { useDispatch } from "react-redux";

import Button from "@/components/common/Button/Button.component";
import { carouselTransition, carouselVariants } from "@/components/common/FramerMotion";
import OTPInput from "@/components/common/OTPInput/OTPInput.component";
import PhoneNumberInput from "@/components/common/PhoneNumberInput/PhoneNumberInput.component";
import ArrowLeft from "@/public/icons/chevron-left.svg";
import { userLoginAsync, userVerifyLoginAsync } from "@/store/user/user.actions";

import * as styles from "./LoginSignUpBox.styles";

const LoginSignUpBox = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    const [step, setStep] = useState<"phone" | "otp">("phone");
    const [phone, setPhone] = useState<string>("");
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
        setPhone(e.target.value);
    };

    const onChangeFormatedPhone = (value: number) => {
        setFormatedPhone(value);
    };

    const onOTPSendSuccess = (expiresAt: number) => {
        setIsLoading(false);

        setStep("otp");

        if (error) setError("");

        setOptExpiredAt(expiresAt);
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
        router.push("/home").then(() => setIsLoading(false));
    };

    const onOTPVerifyFailure = (e: any) => {
        setIsLoading(false);

        if (e?.response?.status === 422) {
            setError("Incorrect OTP.");
        } else {
            setError("Something went wrong. Please try again.");
        }
    };

    const onClickNext = (e: FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setDirection(1);

        if (step === "phone") {
            dispatch(userLoginAsync({ phone: formatedPhone }, onOTPSendSuccess, onOTPSendFailure));
        } else {
            dispatch(
                userVerifyLoginAsync({ phone: formatedPhone, otp }, onOTPVerifySuccess, onOTPVerifyFailure)
            );
        }
    };

    const onGoBack = () => {
        setDirection(-1);
        setStep("phone");

        if (otp.length) setOtp("");
        if (error) setError("");
    };

    return (
        <form css={styles.container} onSubmit={onClickNext}>
            <motion.div
                css={styles.col}
                key={step}
                variants={carouselVariants}
                custom={direction}
                initial="enter"
                animate="center"
                exit="exit"
                transition={carouselTransition}>
                {step === "phone" ? (
                    <PhoneNumberInput
                        value={phone}
                        formatedPhone={onChangeFormatedPhone}
                        onChange={onChangePhone}
                    />
                ) : (
                    <div css={styles.otpInputContainer}>
                        <div css={styles.optTextsContainer}>
                            <div css={styles.optHeader}>
                                <div css={styles.backBtn} onClick={onGoBack}>
                                    <ArrowLeft />
                                </div>
                                <span css={styles.optHeading}>Enter OTP</span>
                            </div>
                            <span css={styles.optSubHeading}>
                                We sent an one-time password to <span>{phone}</span>
                            </span>
                        </div>
                        <OTPInput value={otp} onChange={onOTPChange} expiredAt={optExpiredAt} />
                    </div>
                )}
            </motion.div>

            {error && <div css={styles.error}>{error}</div>}

            <Button
                css={styles.button}
                variant="contained"
                color="success"
                type="submit"
                loading={isLoading}
                isDisabled={step === "phone" ? phone.length < 7 : otp.length < 6}>
                {step === "phone" ? "Next" : "Login"}
            </Button>
        </form>
    );
};

export default memo(LoginSignUpBox);
