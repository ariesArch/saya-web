import "react-toastify/dist/ReactToastify.min.css";

import { DetailedHTMLProps, Fragment, HTMLAttributes, memo, useCallback } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast, ToastContainer } from "react-toastify";

import AlertCircleIcon from "@/public/icons/alert-circle.svg";
import ContentCopyIcon from "@/public/icons/content-copy.svg";

import * as styles from "./CopyCouponCode.styles";

export type Props = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
    couponCode: string;
    heading?: string;
    info?: string;
};

const CopyCouponCode = ({
    couponCode,
    heading = defaultTexts.heading,
    info = defaultTexts.info,
    ...rest
}: Props) => {
    const onCopy = useCallback(() => {
        toast("Successfully copied to the clipboard", { type: "success" });
    }, []);

    return (
        <Fragment>
            <div css={styles.container} {...rest}>
                <span css={styles.heading}>{heading}</span>

                <div css={styles.couponContainer}>
                    <span css={styles.couponText}>{couponCode}</span>

                    <CopyToClipboard css={styles.copyButton} onCopy={onCopy} text={couponCode}>
                        <ContentCopyIcon css={styles.couponIcon} />
                    </CopyToClipboard>
                </div>

                <div css={styles.infoContainer}>
                    <span css={styles.alertIcon}>
                        <AlertCircleIcon />
                    </span>
                    <span css={styles.info}>{info}</span>
                </div>
            </div>

            <ToastContainer autoClose={1000} hideProgressBar />
        </Fragment>
    );
};

const defaultTexts = {
    heading: "Copy your coupon code",
    info: "Coupon code ကို copy ကူး၍ SAYA app ၏ Add coupon code နေရာတွင်လည်း ထည့်၍ promotion ကို တိုက်ရိုက်ရယူနိုင်ပါသည်။",
};

export default memo(CopyCouponCode);
