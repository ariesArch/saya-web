import Image from "next/image";
import { useRouter } from "next/router";
import { FC } from "react";

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
        <div css={styles.courseCard}>
            <a css={styles.imageContainer} onClick={onRedirectToCourse}>
                <Image src={image} layout="fill" />
            </a>
            <a css={styles.courseName} onClick={onRedirectToCourse}>
                {courseName}
            </a>
            <div css={styles.subTexts}>
                {levelIcons[level.toLowerCase() as Levels] || levelIcons.preintermediate}
                {level} . Tr. {teacher?.name}
            </div>
        </div>
    );
};

export default ClassroomCourseCard;
