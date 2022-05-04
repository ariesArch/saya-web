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
                    Practice what you have learned through fun exercises and get your quizz summary right
                    inside the application.
                </h5>
            </motion.div>
            <motion.div css={styles.illuContainer} variants={illuVariants} {...landingAnimationConfig}>
                <FeaturesIllu />
            </motion.div>
        </section>
    );
};

export default FeaturesSection;
