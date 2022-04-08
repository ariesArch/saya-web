import Avatar from "@/components/common/Avatar/Avatar.component";
import UpArrowCircle from "@/public/icons/arrow-up-circle.svg";
import AdvancedBadge from "@/public/icons/profile-badge-advanced.svg";
import BeginnerBadge from "@/public/icons/profile-badge-beginner.svg";
import IntermediateBadge from "@/public/icons/profile-badge-intermediate.svg";
import PreintermediateBadge from "@/public/icons/profile-badge-preintermediate.svg";
import Star from "@/public/icons/star.svg";

import * as styles from "./RankItem.styles";

interface Props {
    rank: number;
    name: string;
    image: string | StaticImageData;
    score: number;
    badge?: "beginner" | "preintermediate" | "intermediate" | "advanced";
    status?: "up" | "down";
    isSelected?: boolean;
}

const RankItem = ({ rank, name, image, score, badge, status, isSelected = false }: Props) => {
    return (
        <div css={styles.rankItem(isSelected)}>
            <span css={styles.rankNumber}>{rank}.</span>

            <div css={styles.avatarContainer}>
                <Avatar src={image} size="4rem" borderColor="var(--color-violet-light)" />
            </div>

            <div css={styles.nameContainer}>
                {status && (
                    <div css={styles.status}>
                        <UpArrowCircle />
                    </div>
                )}
                <span css={styles.name}>{name}</span>
                {badge && <div css={styles.badge}>{badges[badge]}</div>}
            </div>

            <div css={styles.score}>
                <Star />
                <span css={styles.scoreNumber}>{score}</span>
            </div>
        </div>
    );
};

const badges = {
    beginner: <BeginnerBadge />,
    preintermediate: <PreintermediateBadge />,
    intermediate: <IntermediateBadge />,
    advanced: <AdvancedBadge />,
};

export default RankItem;
