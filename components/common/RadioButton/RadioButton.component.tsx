import { FC, HTMLProps } from "react";

import { RadioColor } from "@/interfaces/common.interfaces";

import * as styles from "./RadioButton.styles";

interface Props extends HTMLProps<HTMLInputElement> {
    label?: string;
    color?: RadioColor;
}

const RadioButton: FC<Props> = ({ label = "", color = "primary", ...rest }) => {
    return (
        <label css={styles.label}>
            <input css={styles.input(color, !!label?.length)} type="radio" name={label} {...rest} />
            {label}
        </label>
    );
};

export default RadioButton;
