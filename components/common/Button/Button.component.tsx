import { ButtonHTMLAttributes, forwardRef } from "react";

import { ButtonColor, ButtonVariant } from "@/interfaces/common.interfaces";

import * as styles from "./Button.styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    color?: ButtonColor;
    loading?: boolean;
    isDisabled?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
    const {
        loading = false,
        isDisabled = false,
        className,
        children,
        variant = "default",
        color = "default",
        style,
        ...rest
    } = props;

    return (
        <button
            ref={ref}
            css={styles.button(color, variant, loading || isDisabled)}
            className={className}
            disabled={loading || isDisabled}
            {...rest}>
            {loading ? "Loading . . . " : children}
        </button>
    );
});

Button.displayName = "Button";

export default Button;
