import CupIcon from "@/public/icons/cup.svg";

import * as styles from "./RankBanner.styles";

const RankBanner = () => {
    return (
        <div css={styles.banner}>
            <div css={styles.bannerHeading}>
                <CupIcon />
                <span>Gold Rank</span>
            </div>
            <div css={styles.bannerTexts}>
                Ends in <span>2 days : 14 hr : 20 min : 12 sec</span>
            </div>
        </div>
    );
};

export default RankBanner;
