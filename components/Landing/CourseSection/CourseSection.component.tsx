import { motion } from "framer-motion";

import { contentsVariant, illuVariants, landingAnimationConfig } from "@/components/common/FramerMotion";
import WeeklyScheduler from "@/components/Landing/WeeklySchedule/WeeklySchedule.component";
import CourseIllu from "@/public/images/landing-illu-4.svg";
import ScheduleIllu from "@/public/images/landing-illu-5.svg";

import * as styles from "./CourseSection.styles";

const CourseSection = () => {
    return (
        <section css={styles.container} id="course">
            <div css={styles.aboutCourse}>
                <motion.div css={styles.illuContainer} variants={illuVariants} {...landingAnimationConfig}>
                    <CourseIllu />
                </motion.div>
                <motion.div css={styles.contents} variants={contentsVariant} {...landingAnimationConfig}>
                    {textSections.map(({ id, heading, subHeading }) => (
                        <div css={styles.textSection} key={id}>
                            <h4 css={styles.heading}>{heading}</h4>
                            <h5 css={styles.subHeading}>{subHeading}</h5>
                        </div>
                    ))}
                </motion.div>
            </div>
            <div css={styles.aboutSchedule}>
                <motion.div css={styles.contents} variants={contentsVariant} {...landingAnimationConfig}>
                    <div css={styles.textSection}>
                        <h4 css={styles.heading}>Learning Schedule</h4>
                        <h5 css={styles.subHeading}>
                            with lectures from some of Myanmar best teachers, engaging contents, interactive
                            practices sessions.
                        </h5>
                    </div>
                    <div>
                        <WeeklyScheduler />
                    </div>
                </motion.div>
                <motion.div css={styles.illuContainer} variants={illuVariants} {...landingAnimationConfig}>
                    <ScheduleIllu />
                </motion.div>
            </div>
        </section>
    );
};

const textSections = [
    {
        id: 1,
        heading: "Courses",
        subHeading:
            "with lectures from some of Myanmar best teachers, engaging contents, interactive practices sessions.",
    },
    {
        id: 2,
        heading: "Saya Premium",
        subHeading:
            "with lectures from some of Myanmar best teachers, engaging contents, interactive practices sessions.",
    },
    {
        id: 3,
        heading: "Stars Reward",
        subHeading:
            "with lectures from some of Myanmar best teachers, engaging contents, interactive practices sessions.",
    },
];

export default CourseSection;
