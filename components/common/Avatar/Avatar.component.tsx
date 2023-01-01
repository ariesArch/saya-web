import Image from "next/image";
import { FC } from "react";

import { Levels } from "@/components/common/sharedData";
import AdvancedBadge from "@/public/icons/profile-badge-advanced.svg";
import BeginnerBadge from "@/public/icons/profile-badge-beginner.svg";
import IntermediateBadge from "@/public/icons/profile-badge-intermediate.svg";
import PreintermediateBadge from "@/public/icons/profile-badge-preintermediate.svg";
import PlaceholderImg from "@/public/images/no_photo.png";

import * as styles from "./Avatar.styles";

interface Props {
    src: string | StaticImageData;
    size?: string;
    badge?: Levels;
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
    elementary: <BeginnerBadge />,
    preintermediate: <PreintermediateBadge />,
    intermediate: <IntermediateBadge />,
    upperintermediate: <IntermediateBadge />,
    advanced: <AdvancedBadge />,
};

export default Avatar;
