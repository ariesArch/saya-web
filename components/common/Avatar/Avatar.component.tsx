import Image from "next/image";
import { FC } from "react";

import AdvancedBadge from "@/public/icons/profile-badge-advanced.svg";
import BeginnerBadge from "@/public/icons/profile-badge-beginner.svg";
import IntermediateBadge from "@/public/icons/profile-badge-intermediate.svg";
import PreintermediateBadge from "@/public/icons/profile-badge-preintermediate.svg";

import * as styles from "./Avatar.styles";

interface Props {
    src: string | StaticImageData;
    size?: string;
    badge?: "beginner" | "preintermediate" | "intermediate" | "advanced";
    borderColor?: string;
}

const Avatar: FC<Props> = ({ src, size, badge, borderColor }) => {
    return (
        <div css={styles.avatar}>
            <div css={styles.imgContainer(size, borderColor)}>
                <Image src={src} layout="fill" objectFit="cover" />
            </div>
            {badge && <div css={styles.badge(size)}>{badges[badge]}</div>}
        </div>
    );
};

const badges = {
    beginner: <BeginnerBadge />,
    preintermediate: <PreintermediateBadge />,
    intermediate: <IntermediateBadge />,
    advanced: <AdvancedBadge />,
};

export default Avatar;
