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
        <div css={styles.courseCard}>
            <a css={styles.imageContainer} onClick={onRedirectToCourse}>
                <Image src={image} layout="fill" />
            </a>
            <div css={styles.progressContainer}>
                <span css={styles.progressText}>{progress}% Learned</span>
                <ProgressBar progress={progress} />
            </div>
            <a css={styles.courseName} onClick={onRedirectToCourse}>
                {courseName}
            </a>
        </div>
    );
};

export default ClassroomCourseCard;
