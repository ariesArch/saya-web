import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";
import { ChangeEvent, FormEvent, memo, useEffect, useState } from "react";
import OtpInput from "react-otp-input";
import { useDispatch } from "react-redux";

import Button from "@/components/common/Button/Button.component";
import ArrowLeft from "@/public/icons/chevron-left.svg";
import MyanmarFlag from "@/public/icons/myanmar-flag.png";
import { userLoginAsync, userVerifyLoginAsync } from "@/store/user/user.actions";
import { secondsToFormattedTime } from "@/utils/date-time";

import * as styles from "./LoginSignUpBox.styles";

const LoginSignUpBox = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    const [step, setStep] = useState<"phone" | "otp">("phone");
    const [phone, setPhone] = useState<string>("");
    const [otp, setOtp] = useState("");
    const [expirationTimer, setExpirationTimer] = useState<number>(0);

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string>("");

    const onOTPChange = (otp: string) => {
        setOtp(otp);
    };

    const onPhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPhone(e.target.value);
    };

    const onOTPSendSuccess = (expiresAt: number) => {
        setIsLoading(false);

        setStep("otp");

        if (error) setError("");

        setExpirationTimer(expiresAt);
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

        if (step === "phone") {
            dispatch(
                userLoginAsync(
                    { phone: phone[0] === "0" ? `95${phone.substring(1)}` : `95${phone}` },
                    onOTPSendSuccess,
                    onOTPSendFailure
                )
            );
        } else {
            dispatch(
                userVerifyLoginAsync(
                    { phone: phone[0] === "0" ? `95${phone.substring(1)}` : `95${phone}`, otp },
                    onOTPVerifySuccess,
                    onOTPVerifyFailure
                )
            );
        }
    };

    const onGoBack = () => {
        setStep("phone");

        if (otp.length) setOtp("");
        if (error) setError("");
    };

    useEffect(() => {
        let timer: NodeJS.Timeout;

        if (expirationTimer > 0) {
            timer = setTimeout(() => {
                setExpirationTimer(expirationTimer - 1);
            }, 1000);
        }
        return () => clearTimeout(timer);
    }, [expirationTimer]);

    return (
        <form css={styles.container} onSubmit={onClickNext}>
            <motion.div
                css={styles.inputContainer}
                variants={phoneInputVariants}
                animate={step === "phone" ? "enter" : "exit"}
                initial="enter">
                <div css={styles.iconContainer}>
                    <Image src={MyanmarFlag} alt="Myanmar Flag" />
                    <span>+95</span>
                </div>
                <input
                    css={styles.input}
                    type="number"
                    placeholder="Start with 09"
                    value={phone}
                    onChange={onPhoneChange}
                />
            </motion.div>

            <motion.div
                css={styles.otpInputContainer}
                variants={otpInputVariants}
                animate={step === "otp" ? "enter" : "exit"}
                initial="exit">
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
                <OtpInput
                    containerStyle={{ alignSelf: "center" }}
                    inputStyle={{
                        width: "4rem",
                        height: "4rem",
                        borderRadius: "1rem",
                        border: ".5px solid #e1e1e1",
                        backgroundColor: "#f6f6f6",
                    }}
                    value={otp}
                    onChange={onOTPChange}
                    numInputs={6}
                    isInputNum
                    separator={<span style={{ display: "inline-block", marginRight: "1rem" }}>&nbsp;</span>}
                />
                <div css={styles.timer}>
                    {expirationTimer
                        ? secondsToFormattedTime(expirationTimer)
                        : "OTP expired. Please try again."}
                </div>
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

const phoneInputVariants: Variants = {
    enter: {
        opacity: 1,
        transform: "translateX(0)",
        height: "auto",
        borderWidth: "1",
    },
    exit: {
        opacity: 0,
        transform: "translateX(-100%)",
        height: 0,
        borderWidth: "0",
    },
};

const otpInputVariants: Variants = {
    enter: {
        opacity: 1,
        transform: "translateX(0)",
        height: "auto",
    },
    exit: {
        opacity: 0,
        transform: "translateX(110%)",
        height: 0,
    },
};

export default memo(LoginSignUpBox);
