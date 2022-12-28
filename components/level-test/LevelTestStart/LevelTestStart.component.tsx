import { motion } from "framer-motion";
import dynamic from "next/dynamic";

import Button from "@/components/common/Button/Button.component";

import * as styles from "./LevelTestStart.styles";

const MascotIllustration = dynamic(() => import("@/public/images/mascot.svg"));

interface Props {
    onStart: () => any;
}

const animationData = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { delay: 0.5 },
};

const LevelTestStart = ({ onStart }: Props) => {
    return (
        <div css={styles.container}>
            <h5 css={styles.heading}>Ready for your level test?</h5>
            <motion.div css={styles.illuContainer} {...animationData}>
                <MascotIllustration />
            </motion.div>
            <Button css={styles.button} onClick={onStart}>
                Start now
            </Button>
        </div>
    );
};

export default LevelTestStart;
