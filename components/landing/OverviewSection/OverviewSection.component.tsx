import { motion, Variants } from "framer-motion";
import Image from "next/image";

import LoginSignUpBox from "@/components/landing/LoginSignUpBox/LoginSignUpBox.component";
import AndroidIcon from "@/public/icons/download-android.png";
import AppleStoreIcon from "@/public/icons/download-app-store.png";
import PlayStoreIcon from "@/public/icons/download-google-play.png";
import OverviewIllu from "@/public/images/landing-illu-1.svg";

import * as styles from "./OverviewSection.styles";

const OverviewSection = () => {
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
                                English.
                                <h1 css={styles.headingTips}>
                                    <span css={styles.headingTooltip}>4 skills</span>
                                    <span css={styles.additionalTip}>+ effective learning</span>
                                </h1>
                            </span>
                        </h1>
                    </div>
                    <h2 css={styles.subHeading}>
                        with lectures from some of Myanmar best teachers, engaging contents, interactive
                        practices sessions.
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
                    <LoginSignUpBox />

                    <div css={styles.downloadLinksContainer}>
                        <span css={styles.downloadHeading}>Learn on mobile</span>
                        <div css={styles.downloadLinks}>
                            <a href="https://play.google.com" target="_blank" rel="noopener noreferrer">
                                <Image src={PlayStoreIcon} />
                            </a>
                            <a href="https://android.com" target="_blank" rel="noopener noreferrer">
                                <Image src={AndroidIcon} />
                            </a>
                            <a href="https://apps.apple.com/us/app" target="_blank" rel="noopener noreferrer">
                                <Image src={AppleStoreIcon} />
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
        x: -1000,
    },
    onscreen: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            bounce: 0.3,
            duration: 2.5,
        },
    },
};

const loginBoxVariants: Variants = {
    offscreen: {
        opacity: 0,
        x: 1000,
    },
    onscreen: {
        opacity: 1,
        x: 0,
        skewY: "-10deg",
        transition: {
            type: "spring",
            bounce: 0.3,
            duration: 2.5,
        },
    },
};

export default OverviewSection;
