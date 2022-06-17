import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { contentsVariant, illuVariants, landingAnimationConfig } from "@/components/common/FramerMotion";
import AndroidIcon from "@/public/icons/android.svg";
import AppleStoreIcon from "@/public/icons/apple-store.svg";
import PlayStoreIcon from "@/public/icons/playstore.svg";
import DotsIllu from "@/public/images/faq-dots.svg";
import Dots from "@/public/images/platforms-dots.svg";
import PlatformIllu from "@/public/images/platforms-illu.svg";
import { downloadLinks } from "@/utils/constants";
import { fetchApkDownloadLink } from "@/utils/index";

import * as styles from "./PlatformsSection.styles";

const PlatformsSection = () => {
    const [apkDownloadLink, setApkDownloadLink] = useState(downloadLinks.apk);

    useEffect(() => {
        fetchApkDownloadLink((link) => setApkDownloadLink(link));
    }, []);
    return (
        <section css={styles.container} id="faq">
            <motion.div css={styles.illuContainer} variants={illuVariants} {...landingAnimationConfig}>
                <PlatformIllu />

                <div css={styles.leftSideDots}>
                    <Dots />
                </div>
            </motion.div>
            <motion.div css={styles.contents} variants={contentsVariant} {...landingAnimationConfig}>
                <div css={styles.downloadLinksContainer}>
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
                            href={downloadLinks.appStore}
                            target="_blank"
                            rel="noopener noreferrer">
                            <AppleStoreIcon />

                            <span css={styles.textContainer}>
                                <span css={styles.btnTextSubHeading}>Download on the</span>
                                <span css={styles.btnTextHeading}>App Store</span>
                            </span>
                        </a>
                    </div>

                    <div css={styles.downloadLinks}>
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
                    </div>
                </div>
            </motion.div>

            <div css={styles.dots}>
                <DotsIllu />
            </div>
        </section>
    );
};

export default PlatformsSection;
