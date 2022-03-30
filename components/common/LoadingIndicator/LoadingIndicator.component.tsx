import { useNProgress } from "@tanem/react-nprogress";
import { FC } from "react";

import * as styles from "./LoadingIndicator.styles";

const LoadingIndicator: FC<{ isRouteChanging: boolean }> = ({ isRouteChanging }) => {
    const { animationDuration, isFinished, progress } = useNProgress({
        isAnimating: isRouteChanging,
    });

    return (
        <div css={styles.container({ isFinished, animationDuration })}>
            <div css={styles.bar({ progress, animationDuration })}>
                <div css={styles.spinner} />
            </div>
        </div>
    );
};

export default LoadingIndicator;
