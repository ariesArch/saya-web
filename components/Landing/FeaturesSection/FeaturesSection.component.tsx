import { motion } from "framer-motion";

import { contentsVariant, illuVariants, landingAnimationConfig } from "@/components/common/FramerMotion";
import FeaturesIllu from "@/public/images/landing-illu-3.svg";

import * as styles from "./FeaturesSection.styles";

const FeaturesSection = () => {
    return (
        <section css={styles.container} id="features">
            <motion.div css={styles.contents} variants={contentsVariant} {...landingAnimationConfig}>
                <h4 css={styles.heading}>Interactive Practice</h4>
                <h5 css={styles.subHeading}>
                    with lectures from some of Myanmar best teachers, engaging contents, interactive practices
                    sessions.
                </h5>
            </motion.div>
            <motion.div css={styles.illuContainer} variants={illuVariants} {...landingAnimationConfig}>
                <FeaturesIllu />
            </motion.div>
        </section>
    );
};

export default FeaturesSection;
