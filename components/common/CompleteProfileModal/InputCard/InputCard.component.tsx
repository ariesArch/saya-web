import { FC, ReactNode } from "react";

import * as styles from "./InputCard.styles";

const InputCard: FC<{ label: string; labelFor?: string; children: ReactNode }> = ({
    label,
    labelFor = "",
    children,
}) => (
    <div css={styles.inputCard}>
        <label css={styles.label} htmlFor={labelFor}>
            {label}
        </label>
        {children}
    </div>
);

export default InputCard;
