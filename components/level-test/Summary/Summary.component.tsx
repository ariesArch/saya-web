import { motion } from "framer-motion";
import Link from "next/link";
import { useSelector } from "react-redux";

import { mapStudentLevelToLevel } from "@/components/common/sharedData";
import Avatar from "@/components/level-test/Avatar/Avatar.component";
import { ReduxState, StudentLevel } from "@/interfaces/redux.interfaces";

import * as styles from "./Summary.styles";

interface Props {
    level: StudentLevel;
}

const LevelTestSummary = ({ level }: Props) => {
    const { photo } = useSelector((state: ReduxState) => state.userState.userData);

    return (
        <div css={styles.container}>
            <Avatar src={photo} size="19rem" badge={mapStudentLevelToLevel[level]} />
            <motion.span css={styles.congrats} {...textAnimationData}>
                Congratulations!
            </motion.span>
            <motion.p css={styles.text} {...textAnimationData}>
                You&apos;ve got a verified badge for {mapStudentLevelToLevel[level]} level!
            </motion.p>

            <Link as="/home/explore" href="/home/explore" {...textAnimationData}>
                <motion.span css={styles.link} {...textAnimationData}>
                    Exit
                </motion.span>
            </Link>
        </div>
    );
};

const textAnimationData = {
    initial: { opacity: 0, scale: 0.6 },
    animate: { opacity: 1, scale: 1 },
    transition: { delay: 3, type: "spring", duration: 100, stiffness: 100 },
};

export default LevelTestSummary;
