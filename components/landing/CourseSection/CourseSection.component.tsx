import { motion } from "framer-motion";

import { contentsVariant, illuVariants, landingAnimationConfig } from "@/components/common/FramerMotion";
import WeeklyScheduler from "@/components/landing/WeeklySchedule/WeeklySchedule.component";
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
                            Set your study timetable and get notified to watch the daily lectures and join the
                            live classes.
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
            "All courses are designed by our teachers to cover everyone with different level of English proficiency.",
    },
    {
        id: 3,
        heading: "Earn Reward",
        subHeading: "Earn stars as you progress through your learning journey.",
    },
    {
        id: 2,
        heading: "Saya Premium",
        subHeading: "Get access to all courses, lectures, and live classes at a very affordable price.",
    },
];

export default CourseSection;
