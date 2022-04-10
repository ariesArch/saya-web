import { forwardRef, HTMLProps } from "react";

import { RadioColor } from "@/interfaces/common.interfaces";

import * as styles from "./RadioButton.styles";

interface Props extends HTMLProps<HTMLInputElement> {
    label?: string;
    radioColor?: RadioColor;
    radioSize?: string;
}

const RadioButton = forwardRef<HTMLInputElement, Props>((props, ref) => {
    const { label = "", radioColor = "primary", radioSize, ...rest } = props;

    return (
        <label css={styles.label}>
            <input
                css={styles.input(radioColor, !!label?.length, radioSize)}
                type="radio"
                name={label}
                ref={ref}
                {...rest}
            />
            {label}
        </label>
    );
});

RadioButton.displayName = "RadioButton";

export default RadioButton;
