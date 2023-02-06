import Image from "next/image";
import { useRouter } from "next/router";
import { FC, memo } from "react";

import { levelIcons, Levels } from "@/components/common/sharedData";
import { Teacher } from "@/interfaces/common.interfaces";

import * as styles from "./ExploreCourseCard.styles";

interface Props {
    courseId: string;
    image: string | StaticImageData;
    courseName: string;
    level: string;
    teacher: Teacher;
}

const ClassroomCourseCard: FC<Props> = ({ courseId, image, courseName, level, teacher }) => {
    const router = useRouter();

    const onRedirectToCourse = () => {
        router.push(`/courses/${courseId}`);
    };

    return (
        <div css={styles.courseCard} onClick={onRedirectToCourse}>
            <div css={styles.imageContainer}>
                <Image src={image} layout="fill" alt="Course Cover" />
            </div>
            <div css={styles.courseName}>{courseName}</div>
            <div css={styles.subTexts}>
                {levelIcons[level.toLowerCase() as Levels] || levelIcons.preintermediate}
                {level} . {teacher?.name}
            </div>
        </div>
    );
};

export default memo(ClassroomCourseCard);
