import Image from "next/image";
import { useRouter } from "next/router";
import { FC, ReactNode } from "react";

import AdvancedLevel from "@/public/icons/level-advanced.svg";
import BeginnerLevel from "@/public/icons/level-beginner.svg";
import IntermediateLevel from "@/public/icons/level-intermediate.svg";
import PreintermediateLevel from "@/public/icons/level-preintermediate.svg";

import * as styles from "./ExploreCourseCard.styles";

interface Props {
    courseId: string;
    image: string | StaticImageData;
    courseName: string;
    level: string;
}

const ClassroomCourseCard: FC<Props> = ({ courseId, image, courseName, level }) => {
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
                {levelIcons[level.toLowerCase()] || levelIcons.pretintermediate}
                {level} . Tr.Sanra
            </div>
        </div>
    );
};

const levelIcons: Record<string, ReactNode> = {
    beginner: <BeginnerLevel />,
    preintermediate: <PreintermediateLevel />,
    intermediate: <IntermediateLevel />,
    advanced: <AdvancedLevel />,
};

export default ClassroomCourseCard;
