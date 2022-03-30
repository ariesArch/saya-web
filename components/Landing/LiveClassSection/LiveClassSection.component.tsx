import { motion } from "framer-motion";
import Image from "next/image";

import { contentsVariant, illuVariants, landingAnimationConfig } from "@/components/common/FramerMotion";
import ScheduleList from "@/components/Landing/ScheduleList/ScheduleList.component";
import LiveClassIllu from "@/public/images/landing-illu-2.svg";
import ManPortrait from "@/public/images/man-portrait.jpg";
import ManPortrait2 from "@/public/images/man-portrait-2.jpg";
import WomanPortrait2 from "@/public/images/woman-portrait-2.jpg";
import WomanPortrait from "@/public/images/woman-portriat.jpg";

import * as styles from "./LiveClassSection.styles";

const LiveClassSection = () => {
    return (
        <motion.section
            css={styles.container}
            id="liveClass"
            variants={illuVariants}
            {...landingAnimationConfig}>
            <div css={styles.illuContainer}>
                <LiveClassIllu />
            </div>

            <motion.div css={styles.contents} variants={contentsVariant} {...landingAnimationConfig}>
                <h4 css={styles.heading}>Live Class</h4>
                <h5 css={styles.subHeading}>
                    with lectures from some of Myanmar best teachers, engaging contents, interactive practices
                    sessions.
                </h5>

                <div css={styles.teachers}>
                    <div css={styles.avatars}>
                        {teachers.map(({ id, name, image }) => (
                            <div css={styles.avatarContainer} key={id}>
                                <Image src={image} alt="avatar" />
                                <span css={styles.teacherName}>{name}</span>
                            </div>
                        ))}
                    </div>
                    <span css={styles.teacherTotalLeft}>
                        <strong>+25</strong>
                        <span>Teachers</span>
                    </span>
                </div>

                <ScheduleList />
            </motion.div>
        </motion.section>
    );
};

const teachers = [
    {
        id: 1,
        name: "Cherry",
        image: WomanPortrait,
    },
    {
        id: 2,
        name: "Mang",
        image: ManPortrait,
    },
    {
        id: 3,
        name: "Sanra",
        image: WomanPortrait2,
    },
    {
        id: 4,
        name: "Philip",
        image: ManPortrait2,
    },
];

export default LiveClassSection;
