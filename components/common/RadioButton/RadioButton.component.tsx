import { forwardRef, HTMLProps, ReactNode } from "react";

import { RadioColor } from "@/interfaces/common.interfaces";

import * as styles from "./RadioButton.styles";

type Props = Omit<HTMLProps<HTMLInputElement>, "label"> & {
    label?: ReactNode;
    radioColor?: RadioColor;
    radioSize?: string;
    showRadio?: boolean;
};

const RadioButton = forwardRef<HTMLInputElement, Props>((props, ref) => {
    const { label = "", radioColor = "primary", radioSize, showRadio = false, ...rest } = props;

    return (
        <label css={styles.label}>
            <input
                css={styles.input(radioColor, !!label, radioSize, showRadio)}
                type="radio"
                ref={ref}
                {...rest}
            />
            {label}
        </label>
    );
});

RadioButton.displayName = "RadioButton";

export default RadioButton;
