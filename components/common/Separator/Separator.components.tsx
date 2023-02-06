import { DetailedHTMLProps, HTMLAttributes, memo } from "react";

import * as styles from "./Separator.styles";

export type Props = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
    spacing?: string;
};

const Separator = ({ children, ...rest }: Props) => {
    return (
        <div css={styles.separator} {...rest}>
            <span>{children}</span>
        </div>
    );
};

export default memo(Separator);
