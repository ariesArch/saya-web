import { motion } from "framer-motion";
import Lottie from "lottie-react";
import Image from "next/image";
import { FC, useEffect, useRef } from "react";

import confettiAnimation from "@/public/animations/78667-confetti.json";
import AdvancedBadge from "@/public/icons/profile-badge-advanced-text.svg";
import BeginnerBadge from "@/public/icons/profile-badge-beginner-text.svg";
import IntermediateBadge from "@/public/icons/profile-badge-intermediate-text.svg";
import PreintermediateBadge from "@/public/icons/profile-badge-preintermediate-text.svg";
import UpperintermediateBadge from "@/public/icons/profile-badge-upper-intermediate-text.svg";
import PlaceholderImg from "@/public/images/no_photo.png";

import * as styles from "./Avatar.styles";

interface Props {
    src: string | StaticImageData;
    size?: string;
    badge?: "beginner" | "preintermediate" | "intermediate" | "upperintermediate" | "advanced";
    borderColor?: string;
    hasBorder?: boolean;
}

const Avatar: FC<Props> = ({ src, size, badge, borderColor, hasBorder = true }) => {
    const lottieRef = useRef(null);

    useEffect(() => {
        setTimeout(() => (lottieRef?.current as any)?.play(), 2500);
    }, []);

    return (
        <motion.div css={styles.avatar} {...avatarAnimationData}>
            <motion.div css={styles.imgContainer(size, borderColor, hasBorder)}>
                <Image src={src || PlaceholderImg} layout="fill" objectFit="cover" alt="User Avatar" />
            </motion.div>
            {badge && (
                <motion.div css={styles.badge(size)} {...badgeAnimationData}>
                    {badges[badge]}
                </motion.div>
            )}
            <Lottie
                start={2000}
                lottieRef={lottieRef}
                loop={false}
                autoplay={false}
                animationData={confettiAnimation}
                css={styles.confetti}
            />
        </motion.div>
    );
};

const badges = {
    beginner: <BeginnerBadge />,
    preintermediate: <PreintermediateBadge />,
    intermediate: <IntermediateBadge />,
    upperintermediate: <UpperintermediateBadge />,
    advanced: <AdvancedBadge />,
};

const avatarAnimationData = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { delay: 1, type: "spring" },
};

const badgeAnimationData = {
    initial: { opacity: 0, scale: 0.5, x: "-50%" },
    animate: { opacity: 1, scale: 1 },
    transition: { delay: 2.5, type: "spring", stiffness: 500 },
};

export default Avatar;
