import { differenceInSeconds } from "date-fns";
import Image from "next/image";
import { QRCodeSVG } from "qrcode.react";
import { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import Button from "@/components/common/Button/Button.component";
import MPUImg from "@/public/images/mpu.png";
import WavePayImg from "@/public/images/wavepay.png";
import { onPaymentModalToggle } from "@/store/payment/payment.actions";

import * as styles from "./PaymentSummary.styles";

interface Props {
    value: string;
    type: "QR" | "REDIRECT";
    expired_date_time: string;
    provider: string;
    method: string;
}

const PaymentSummary: FC<Props> = ({ value, type, expired_date_time, provider, method }) => {
    const dispatch = useDispatch();
    const [countdown, setCountdown] = useState(0);

    const onCloseModal = () => dispatch(onPaymentModalToggle(false));

    useEffect(() => {
        if (type === "QR") return;
        window.open(value, "_blank");
    }, [type, value]);

    useEffect(() => {
        let timeout: NodeJS.Timeout;

        if (type === "QR") {
            const timeDiff = differenceInSeconds(new Date(expired_date_time), new Date());

            setCountdown(timeDiff > 0 ? timeDiff : 0);

            if (countdown > 0) {
                timeout = setTimeout(() => {
                    setCountdown(countdown - 1);
                }, 1000);
            }
        }

        return () => clearTimeout(timeout);
    }, [countdown, expired_date_time, type]);

    return method === "QR" ? (
        <div css={styles.container}>
            <div css={styles.contents}>
                <div css={styles.mainContents}>
                    <h5 css={styles.heading}>Scan QR Code</h5>
                    <div css={styles.qrContainer}>
                        <QRCodeSVG
                            value={value}
                            bgColor="#fff"
                            fgColor="#000"
                            includeMargin={false}
                            level="L"
                            size={128}
                        />
                        <span css={styles.expiration}>{countdown}s</span>
                    </div>

                    <span css={styles.warning}>Scan before it expires</span>
                </div>
                <div css={styles.buttonsContainer}>
                    <Button color="primary">Resend code</Button>
                </div>
            </div>

            <p css={styles.instructions}>
                အောက်ပါ QR Code ကို KBZ Pay App မှ Scan ဖတ်ပါ။
                <br />
                ငွေပေးချေပြီးနောက် SAYA Platform တွင် Noti တက်လာရင် Premium feature တွေကို အသုံးပြုလို့ရပါပြီ။
            </p>
        </div>
    ) : (
        <div css={styles.container}>
            <h5 css={styles.heading}>Pay with {provider}</h5>
            <div css={styles.imageContainer}>
                <Image src={method === "OTP" ? MPUImg : WavePayImg} alt={provider} layout="fill" />
            </div>
            <p css={styles.instructions}>
                ပွင့်လာမည့် New tab တွင် {provider} acc ဖြင့် ငွေလွှဲပေးပါ။
                <br />
                ငွေပေးချေပြီးနောက် SAYA Platform တွင် Noti တက်လာရင် Premium feature တွေကို အသုံးပြုလို့ရပါပြီ။
            </p>

            <Button css={styles.button} variant="outlined" color="primary" onClick={onCloseModal}>
                Close this screen
            </Button>
        </div>
    );
};

export default PaymentSummary;
