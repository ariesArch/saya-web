import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

import LoginSignUpBox from "@/components/landing/LoginSignUpBox/LoginSignUpBox.component";
import AndroidIcon from "@/public/icons/android.svg";
import AppleStoreIcon from "@/public/icons/apple-store.svg";
import AppGalleryIcon from "@/public/icons/hwawei.svg";
import PlayStoreIcon from "@/public/icons/playstore.svg";
import OverviewIllu from "@/public/images/landing-illu-1.svg";
import { downloadLinks, recaptchaSiteKey } from "@/utils/constants";
import { fetchApkDownloadLink } from "@/utils/index";

import * as styles from "./OverviewSection.styles";

const OverviewSection = () => {
    const [apkDownloadLink, setApkDownloadLink] = useState(downloadLinks.apk);

    useEffect(() => {
        fetchApkDownloadLink((link) => setApkDownloadLink(link));
    }, []);
    return (
        <section css={styles.container} id="overview">
            <motion.div
                css={styles.contents}
                initial="offscreen"
                animate="onscreen"
                variants={contentsVariant}>
                <div css={styles.textsContainer}>
                    <div css={styles.headingContainer}>
                        <h1 css={styles.heading}>
                            Become fluent in{" "}
                            <span css={styles.tipContainer}>
                                English
                                <h1 css={styles.headingTips}>
                                    <span css={styles.headingTooltip}>4 skills</span>
                                    <span css={styles.additionalTip}>+ effective learning</span>
                                </h1>
                            </span>
                        </h1>
                    </div>
                    <h2 css={styles.subHeading}>
                        with lectures from some of Myanmar best teachers, engaging contents, interactive
                        practices sessions and live classes.
                    </h2>
                </div>

                <div css={styles.illuContainer}>
                    <OverviewIllu />
                </div>
            </motion.div>

            <motion.div
                css={styles.loginContainer}
                initial="offscreen"
                animate="onscreen"
                variants={loginBoxVariants}>
                <div css={styles.login}>
                    <h5 css={styles.loginHeading}>Getting Started</h5>
                    <GoogleReCaptchaProvider reCaptchaKey={recaptchaSiteKey}>
                        <LoginSignUpBox />
                    </GoogleReCaptchaProvider>

                    <div css={styles.downloadLinksContainer}>
                        <span css={styles.downloadHeading}>Learn on mobile</span>
                        <div css={styles.downloadLinks}>
                            <a
                                css={styles.button}
                                href={downloadLinks.playStore}
                                target="_blank"
                                rel="noopener noreferrer">
                                <PlayStoreIcon />

                                <span css={styles.textContainer}>
                                    <span css={styles.btnTextSubHeading}>GET IT ON</span>
                                    <span css={styles.btnTextHeading}>Google Play</span>
                                </span>
                            </a>
                            <a
                                css={styles.button}
                                href={apkDownloadLink}
                                target="_blank"
                                rel="noopener noreferrer">
                                <AndroidIcon />

                                <span css={styles.textContainer}>
                                    <span css={styles.btnTextSubHeading}>DOWNLOAD</span>
                                    <span css={styles.btnTextHeading}>Android APK</span>
                                </span>
                            </a>
                            <a
                                css={styles.button}
                                href={downloadLinks.appStore}
                                target="_blank"
                                rel="noopener noreferrer">
                                <AppleStoreIcon />

                                <span css={styles.textContainer}>
                                    <span css={styles.btnTextSubHeading}>Download on the</span>
                                    <span css={styles.btnTextHeading}>App Store</span>
                                </span>
                            </a>

                            <a
                                css={styles.button}
                                href={downloadLinks.appGallery}
                                target="_blank"
                                rel="noopener noreferrer">
                                <AppGalleryIcon />

                                <span css={styles.textContainer}>
                                    <span css={styles.btnTextSubHeading}>Download on the</span>
                                    <span css={styles.btnTextHeading}>App Gallery</span>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export const contentsVariant: Variants = {
    offscreen: {
        opacity: 0,
        x: -500,
    },
    onscreen: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            bounce: 0.3,
            duration: 1.5,
        },
    },
};

const loginBoxVariants: Variants = {
    offscreen: {
        opacity: 0,
        x: 500,
    },
    onscreen: {
        opacity: 1,
        x: 0,
        skewY: "-10deg",
        transition: {
            type: "spring",
            bounce: 0.3,
            duration: 1.5,
        },
    },
};

export default OverviewSection;
