import { FC, useEffect, useState } from "react";
import OtpInput from "react-otp-input";

import { secondsToFormattedTime } from "@/utils/date-time";

import * as styles from "./OTPInput.styles";

interface Props {
    value: string;
    onChange: (otp: string) => void;
    expiredAt: number;
}

const OTPInput: FC<Props> = ({ value, onChange, expiredAt }) => {
    const [timer, setTimer] = useState<number>(0);

    useEffect(() => {
        if (expiredAt) setTimer(expiredAt);
    }, [expiredAt]);

    useEffect(() => {
        let timeout: NodeJS.Timeout;

        if (timer > 0) {
            timeout = setTimeout(() => {
                setTimer(timer - 1);
            }, 1000);
        }
        return () => clearTimeout(timeout);
    }, [timer]);

    return (
        <div css={styles.inputContainer}>
            <OtpInput
                containerStyle={{ alignSelf: "center" }}
                inputStyle={{
                    width: "4rem",
                    height: "4rem",
                    borderRadius: "1rem",
                    border: ".5px solid #e1e1e1",
                    backgroundColor: "#f6f6f6",
                }}
                value={value}
                onChange={onChange}
                numInputs={6}
                isInputNum
                separator={<span style={{ display: "inline-block", marginRight: "1rem" }}>&nbsp;</span>}
            />
            <div css={styles.timer}>
                {timer ? secondsToFormattedTime(timer) : "OTP expired. Please try again."}
            </div>
        </div>
    );
};

export default OTPInput;
