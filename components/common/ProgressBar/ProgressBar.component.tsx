import { FC, HTMLAttributes } from "react";

import * as styles from "./ProgressBar.styles";

interface Props extends HTMLAttributes<HTMLDivElement> {
    progress: number;
    color?: "violet" | "blue";
}

const ProgressBar: FC<Props> = ({ progress, color = "violet", ...rest }) => {
    return <div css={styles.progressBar(progress, color)} {...rest} />;
};

export default ProgressBar;
