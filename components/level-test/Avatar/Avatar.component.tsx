import Image from "next/image";
import { FC } from "react";

import AdvancedBadge from "@/public/icons/profile-badge-advanced-text.svg";
import BeginnerBadge from "@/public/icons/profile-badge-beginner-text.svg";
import IntermediateBadge from "@/public/icons/profile-badge-intermediate-text.svg";
import PreintermediateBadge from "@/public/icons/profile-badge-preintermediate-text.svg";
import PlaceholderImg from "@/public/images/no_photo.png";

import * as styles from "./Avatar.styles";

interface Props {
    src: string | StaticImageData;
    size?: string;
    badge?: "beginner" | "preintermediate" | "intermediate" | "advanced";
    borderColor?: string;
    hasBorder?: boolean;
}

const Avatar: FC<Props> = ({ src, size, badge, borderColor, hasBorder = true }) => {
    return (
        <div css={styles.avatar}>
            <div css={styles.imgContainer(size, borderColor, hasBorder)}>
                <Image src={src || PlaceholderImg} layout="fill" objectFit="cover" alt="User Avatar" />
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
