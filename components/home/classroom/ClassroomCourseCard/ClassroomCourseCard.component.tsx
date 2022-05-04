import Image from "next/image";
import { useRouter } from "next/router";
import { FC } from "react";

import ProgressBar from "@/components/common/ProgressBar/ProgressBar.component";

import * as styles from "./ClassroomCourseCard.styles";

interface Props {
    courseId: string;
    image: string | StaticImageData;
    progress: number;
    courseName: string;
}

const ClassroomCourseCard: FC<Props> = ({ courseId, image, courseName, progress }) => {
    const router = useRouter();

    const onRedirectToCourse = () => {
        router.push(`/courses/${courseId}`);
    };

    return (
        <div css={styles.courseCard} onClick={onRedirectToCourse}>
            <div css={styles.imageContainer}>
                <Image src={image} layout="fill" alt="Course Cover" />
            </div>
            <div css={styles.progressContainer}>
                <span css={styles.progressText}>{progress}% Learned</span>
                <ProgressBar progress={progress} />
            </div>
            <div css={styles.courseName}>{courseName}</div>
        </div>
    );
};

export default ClassroomCourseCard;
